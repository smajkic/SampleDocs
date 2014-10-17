var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('publish-dev', function () {
	var sshuser = process.env.SSHUSER;
	var dest = process.env.DEVDEST;

    return gulp.src('_build/html/**/*')
        .pipe(sftp({
            host: 'docs.edev.desire2learn.com',
            user: sshuser,
            remotePath: dest,
			key: {location:'key.txt'}
        }));
});
