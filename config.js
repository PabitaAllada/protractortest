/**
 * Created by Pabita on 12/9/2017.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeOnly: true,
    directConnect: true,
    specs: ['todo-spec.js']
};