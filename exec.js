var exce = require('child_process').exec;

// ----------------- HTMLの監視実行
exce('echo "test"', function (err, stdout, stderr) {
    console.log('stdout -> ', stdout);
    console.log('stderr -> ', stderr);
    console.log('err -> ', err);
});


// ----------------- grunt js,cssの監視実行
exce('grunt', function (err, stdout, stderr) {
    console.log('grunt stdout -> ', stdout);
    console.log('grunt stderr -> ', stderr);
    console.log('grunt err -> ', err);

});
