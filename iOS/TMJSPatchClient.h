//
//  TMJSPatchClient.h
//  autoguru
//
//  Created by hwh on 16/12/27.
//  Copyright © 2016年 baichebao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface TMJSPatchClient : NSObject
+(void)testBundle;
+(void)setDefArg:(NSDictionary *)dataDic;
//检查更新，如果有，便下载
+(void)sync;
+(void)setDevModel;
+(void)setAppKey:(NSString *)appKey WithAppName:(NSString *)appName;
@end
