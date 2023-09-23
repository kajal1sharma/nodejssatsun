const busboy= require('busboy');
let obj={username:'',password:''};

function busb(req, res, next){
    if (req.method === 'POST') {
        console.log('POST request');
        const bb = busboy({ headers: req.headers });
        bb.on('file', (name, file, info) => {
          const { filename, encoding, mimeType } = info;
          console.log(
            `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
            filename,
            encoding,
            mimeType
          );
          file.on('data', (data) => {
            console.log(`File [${name}] got ${data.length} bytes`);
          }).on('close', () => {
            console.log(`File [${name}] done`);
          });
        });
        bb.on('field', (name, val, info) => {
          console.log(`Field [${name}]: value: %j`, val);
          obj[name] =val;
        });
        bb.on('close', () => {
          console.log('Done parsing form!');
          console.log(obj)
          let data = require('../data').userCredentials;

          // console.log(data)
          let arr = data.filter(ele=>{
            if(ele.username==obj.username && ele.password==obj.password){
              return true;
            }
          })

          //console.log("result after checking",arr)
          if(arr.length===1){
            next();
          }
          else{
            res.status(404).render('error')
          }
        //   res.writeHead(303, { Connection: 'close', Location: '/' });// /
        //   res.end();
        });
        req.pipe(bb);
      } else if (req.method === 'GET') {
        res.writeHead(200, { Connection: 'close' });
        res.end(`
          <html>
            <head></head>
            <body>
              <form method="POST" enctype="multipart/form-data">
                <input type="file" name="filefield"><br />
                <input type="text" name="textfield"><br />
                <input type="submit">
              </form>
            </body>
          </html>
        `);
      }
}
module.exports=busb;