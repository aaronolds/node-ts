import app from '../src/index'; // If I don't include the app it will fail
import http from 'http'; // why does this have to be require???  If I try to import it fails
import { expect, use, request } from 'chai';
import chaiHttp from 'chai-http';

use(chaiHttp);

describe('test', function() {
  it('should return 200', function(done) {
    // <= Pass in done callback
    request('http://localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done(); // <= Call done to signal callback end
      });
  });
});
