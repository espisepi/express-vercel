const { Router } = require('express');
const demo = require('./demo.route');

// const fs = require('fs');
const ytdl = require('ytdl-core');

const r = Router();

r.use('/demo', demo);

r.get('/download', (req,res) => {
  var URL = req.query.URL;
  console.log(URL)
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(URL, {
      format: 'mp4'
      }).pipe(res);
});

r.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'express vercel boiler plate',
    data: null
  });
});

module.exports = r;
