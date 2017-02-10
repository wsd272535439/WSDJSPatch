//
//  TMJSPatchClient.m
//  autoguru
//
//  Created by hwh on 16/12/27.
//  Copyright © 2016年 baichebao. All rights reserved.
//

#import "TMJSPatchClient.h"
#import <JSPatch/JPEngine.h>
#import "AGUtility.h"
#import <CommonCrypto/CommonDigest.h>

#define FileHashDefaultChunkSizeForReadingData 1024*8
@implementation TMJSPatchClient
static NSString * patch_url = @"http://112.126.78.86/";
static NSDictionary * defArg;
static NSString * AppKey;
static NSString * AppName;
static int netWorkCount = 0;
//md5方法
+(NSString*)fileMD5:(NSString*)path
{
    NSFileHandle *handle = [NSFileHandle fileHandleForReadingAtPath:path];
    if( handle== nil ) return @"ERROR GETTING FILE MD5"; // file didnt exist
    
    CC_MD5_CTX md5;
    
    CC_MD5_Init(&md5);
    
    BOOL done = NO;
    while(!done)
    {
        NSData* fileData = [handle readDataOfLength: FileHashDefaultChunkSizeForReadingData];
        CC_MD5_Update(&md5, [fileData bytes], [fileData length]);
        if( [fileData length] == 0 ) done = YES;
    }
    unsigned char digest[CC_MD5_DIGEST_LENGTH];
    CC_MD5_Final(digest, &md5);
    NSString* s = [NSString stringWithFormat: @"%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x",
                   digest[0], digest[1],
                   digest[2], digest[3],
                   digest[4], digest[5],
                   digest[6], digest[7],
                   digest[8], digest[9],
                   digest[10], digest[11],
                   digest[12], digest[13],
                   digest[14], digest[15]];
    return s;
}

+(void)setAppKey:(NSString *)appKey WithAppName:(NSString *)appName{
    AppKey = appKey;
    AppName = appName;
}

+(void)testBundle{
    [JPEngine startEngine];
    NSString * jsPath = [[NSBundle mainBundle] pathForResource:@"main" ofType:@"js"];
    [JPEngine evaluateScriptWithPath:jsPath];
}

+(void)network:(void(^)(NSData *))callback param:(NSDictionary *)param api:(NSString *)api{
    NSString * url = [patch_url stringByAppendingString:api];
    NSMutableURLRequest * request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:url]];
    if(param != nil){
        NSData * data = [NSJSONSerialization dataWithJSONObject:param options:NSJSONWritingPrettyPrinted error:nil];
        NSString * data_str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        [request setHTTPBody:[NSData dataWithBytes:[data_str UTF8String] length:strlen([data_str UTF8String])]];
    }
    
    request.HTTPMethod = @"POST";
    [request setValue:@"application/json; charset=utf-8" forHTTPHeaderField:@"Content-Type"];
    NSOperationQueue * queue = [[NSOperationQueue alloc] init];
    [NSURLConnection sendAsynchronousRequest:request queue:queue completionHandler:^(NSURLResponse * _Nullable response, NSData * _Nullable data, NSError * _Nullable connectionError) {
        if(connectionError == nil){
            callback(data);
        }else{
            NSLog(@"handleconnectionError%@",connectionError);
        }
    }];
}

+(void)setDefArg:(NSDictionary *)dataDic{
    if(dataDic != nil){
        defArg = dataDic;
    }
    
//    if(userdata == nil || appName == nil){
//        return;
//    }
//    app_uid = uid;
//    NSString * appversion = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
//    app_version = appversion;
//    app_Name = appName;
//    NSMutableDictionary * param = [[NSMutableDictionary alloc] initWithCapacity:0];
//    [param setObject:appversion forKey:@"appVersion"];
//    [param setObject:appName forKey:@"appName"];
//    [param setObject:userdata forKey:@"defArg"];
//    [TMJSPatchClient network:^(NSData *data) {
//        if (data != nil){
//            id obj = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:nil];
//            NSLog(@"patch+data%@",obj);
//        }
//    } param:param api:@"patchconfig"];
}

+(void)downLoadPatch:(NSString *)patch_url md5:(NSString *)patch_md5{
    netWorkCount += 1;
    NSFileManager * manager = [NSFileManager defaultManager];
    NSMutableURLRequest * request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:patch_url]];
    NSOperationQueue * queue = [[NSOperationQueue alloc] init];
    NSString * docPath = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, true)[0] stringByAppendingString:@"/main.js"];
    [NSURLConnection sendAsynchronousRequest:request queue:queue completionHandler:^(NSURLResponse * _Nullable response, NSData * _Nullable data, NSError * _Nullable connectionError) {
        if(data != nil && connectionError == nil){
            BOOL isOk = [manager createFileAtPath:docPath contents:data attributes:nil];
            if(isOk){
                NSString * fileMd5 = [TMJSPatchClient fileMD5:docPath];
                if([fileMd5 isEqualToString:patch_md5]){
                    [JPEngine startEngine];
                    [JPEngine evaluateScriptWithPath:docPath];
                }else{
                    if(netWorkCount == 10){
                        netWorkCount = 0;
                        //上传错误日志 暂未实现
                    }else{
                        [TMJSPatchClient downLoadPatch:patch_url md5:patch_md5];
                    }
                }
            }else{
                if(netWorkCount == 10){
                    netWorkCount = 0;
                    //上传错误日志 暂未实现
                }else{
                    [TMJSPatchClient downLoadPatch:patch_url md5:patch_md5];
                }
            }
        }else{
            if(netWorkCount == 10){
                netWorkCount = 0;
                //上传错误日志 暂未实现
            }else{
                [TMJSPatchClient downLoadPatch:patch_url md5:patch_md5];
            }
        }
    }];
}

+(void)sync{
    NSMutableDictionary * param = [[NSMutableDictionary alloc] initWithCapacity:0];
    NSString * appversion = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    [param setObject:appversion forKey:@"cm_appVersion"];
    [param setObject:AppName forKey:@"cm_appName"];
    [param setObject:AppKey forKey:@"cm_appKey"];
    if(defArg != nil){
        [param setValuesForKeysWithDictionary:defArg];
    }
    [TMJSPatchClient network:^(NSData * data) {
        if (data != nil){
            id obj = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:nil];
            if([obj isKindOfClass:[NSDictionary class]]){
                NSNumber * code = (NSNumber *)obj[@"code"];
                if(code.integerValue == 0){
                    NSString * patch_md5 = (NSString *)obj[@"result"][@"patch_md5"];
                    NSString * patch_url = (NSString *)obj[@"result"][@"patch_url"];
                    if(patch_md5 != nil && patch_url != nil){
                        NSString * docPath = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, true)[0] stringByAppendingString:@"/main.js"];
                        NSFileManager * manager = [NSFileManager defaultManager];
                        if([manager fileExistsAtPath:docPath]){
                            NSString * file_md5 = [AGUtility fileMD5:docPath];
                            if([file_md5 isEqualToString:patch_md5]){
                                [JPEngine startEngine];
                                [JPEngine evaluateScriptWithPath:docPath];
                            }else{
                                [TMJSPatchClient downLoadPatch:patch_url md5:patch_md5];
                            }
                        }else{
                            [TMJSPatchClient downLoadPatch:patch_url md5:patch_md5];
                        }
                    }
                }
            }
        }
    } param:param api:@"hotfix"];
    
//    NSURLSessionConfiguration * sessionConfig = [NSURLSessionConfiguration backgroundSessionConfigurationWithIdentifier:@"com.qcds.patchDownload"];
//    sessionConfig.timeoutIntervalForRequest = 5;
//    sessionConfig.discretionary = true;
//    sessionConfig.HTTPMaximumConnectionsPerHost = 5;
//    NSURLSession * session = [NSURLSession sessionWithConfiguration:sessionConfig delegate:self delegateQueue:nil];
//    NSURLSessionDownloadTask * task = [session downloadTaskWithURL:[NSURL URLWithString:url]];
//    [task resume];
}

+(void)setDevModel{
    NSMutableDictionary * param = [[NSMutableDictionary alloc] initWithCapacity:0];
    NSString * appversion = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    [param setObject:appversion forKey:@"cm_appVersion"];
    [param setObject:AppName forKey:@"cm_appName"];
    [param setObject:AppKey forKey:@"cm_appKey"];

    [param setObject:@(1) forKey:@"isDev"];
    [TMJSPatchClient network:^(NSData * data) {
        if (data != nil){
            id obj = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:nil];
            if([obj isKindOfClass:[NSDictionary class]]){
                NSNumber * code = (NSNumber *)obj[@"code"];
                if(code.integerValue == 0){
                    NSString * patch_md5 = (NSString *)obj[@"result"][@"patch_md5"];
                    NSString * patch_url = (NSString *)obj[@"result"][@"patch_url"];
                    if(patch_md5 != nil && patch_url != nil){
                        NSString * docPath = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, true)[0] stringByAppendingString:@"/main.js"];
                        NSFileManager * manager = [NSFileManager defaultManager];
                        if([manager fileExistsAtPath:docPath]){
                            NSString * file_md5 = [AGUtility fileMD5:docPath];
                            if([file_md5 isEqualToString:patch_md5]){
                                [JPEngine startEngine];
                                [JPEngine evaluateScriptWithPath:docPath];
                            }else{
                                [TMJSPatchClient downLoadPatch:patch_url md5:patch_md5];
                            }
                        }else{
                            [TMJSPatchClient downLoadPatch:patch_url md5:patch_md5];
                        }
                    }
                }
            }
        }
    } param:param api:@"hotfix"];
}

@end
