import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/App.js';

chai.use(chaiHttp);
const { expect } = chai;
const hexRegex = /^[0-9a-fA-F]{32}$/;
describe('API route get files', function () {
    it('should return formatted data for files', (done) => {
        try {
            this.timeout(10000);
            chai.request("http://localhost:8000/toolbox/api")
                .get('/getfiles')
                .end((err, res) => {
                    if (err) {
                        done(err);
                    } else {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('array');
                        expect(res.body[0]).to.have.property('file').that.is.a('string');
                        expect(res.body[0]).to.have.property('lines').to.be.an('array');
                        if (res.body[0].lines) {
                            for (const line of res.body[0].lines) {
                                expect(line).to.have.property('text').that.is.a('string');
                                expect(line).to.have.property('number').that.is.a('number');
                                expect(line).to.have.property('hex').that.is.a('string').and.match(hexRegex);

                            }
                        }
                        done();
                    }
                });
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    });
});
describe('API route get list files', () => {
    it('should return list of files', (done) => {
        try {

            chai.request("http://localhost:8000/toolbox/api")
                .get('/files/list')
                .end((err, res) => {
                    if (err) {
                        done(err);
                    } else {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('array');
                        done();
                    }
                });
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    });
});
describe('API route get a specific file', () => {
    it('should return file data', (done) => {
        try {
            chai.request("http://localhost:8000/toolbox/api")
                .get('/files/data?fileName=test9.csv')
                .end((err, res) => {
                    if (err) {
                        done(err);
                    } else {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('array');
                        expect(res.body[0]).to.have.property('file').that.is.a('string');
                        expect(res.body[0]).to.have.property('lines').to.be.an('array');
                        done();
                    }
                });
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    });
});
