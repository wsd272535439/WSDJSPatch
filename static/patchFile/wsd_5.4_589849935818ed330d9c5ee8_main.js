defineClass('autoguru.AGNewMechanicController', {
            tableView_cellForRowAtIndexPath: function(tableView,indexPath) {
            var cell = self.ORIGtableView_cellForRowAtIndexPath(tableView,indexPath);
            var row = indexPath.row()
            if(cell.reuseIdentifier().isEqualToString('AGTagsAssociateTableViewCell')){
            
                if(self.questions().count() > 0){
                    var feed = self.questions().objectAtIndex(row);
                    cell.userNameLabel().setText(feed.userName())

                    require('NSURL,UIImageView,UIImage')
                    var head = cell.headPortrait()
                    head.setImageWithURL(NSURL.URLWithString(feed.avatarUrlSmall()))
                }
            }
            
            return cell
        }
    });
