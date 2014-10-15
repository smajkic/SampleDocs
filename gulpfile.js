var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('publish-dev', function () {
    var sshkey = process.env.SSHKEY;
    return gulp.src('_build/*')
        .pipe(sftp({
            host: 'docs.edev.desire2learn.com',
            user: 'travis',
            remotePath: '/var/www/vui/sm-test',
			pass: sshkey
        }));
});
