const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var app = express()
app.use(cors());
app.use(bodyParser.json());
const PORT = 8080

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: 'officialrahul24@gmail.com',
   pass: ''//WRITE YOUR OWN GOOGLE PASSWORD (APP PASSWORD)
  }
});

app.post('/send_mail', async function(req, res){
   try{
      var email = req.body.email;
      let subject = req.body.subject;
      let message = req.body.message;
      let fullName = req.body.fullName;
      console.log(email, subject, message, fullName)

      const mailOptions = {
        from: 'officialrahul24@gmail.com',
        to: email,
        subject: subject,
        html: `
        <div class=""><div class="aHl"></div><div id=":t6" tabindex="-1"></div><div id=":tx" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc3NDMyOTAzNDgxNDAzNTkxMCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d; 4:WyIjbXNnLWY6MTc3NDMyOTAzNDgxNDAzNTkxMCIsbnVsbCxbXV0."><div id=":tw" class="a3s aiL msg-270298275480843986"><div class="adM">
</div><u></u>
 
 <div style="Margin:0 auto;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;width:100%;direction:ltr;text-align:center" bgcolor="#ffffff"><div class="m_-270298275480843986preheader" style="font-size:1px;display:none">See how safe your device can be with this free trial.</div><table width="100%" cellpadding="0" cellspacing="0" style="Margin:0;padding:0;min-width:100%;width:100%" bgcolor="#ffffff"><tbody><tr><td align="center" style="vertical-align:top" bgcolor="#ffffff"><table align="center" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;Margin:0 auto;direction:ltr" bgcolor="#ffffff">
  <tbody><tr>
   <td class="m_-270298275480843986main-container-header" valign="top">
    

<table id="m_-270298275480843986sHeaderTableId" width="100%" cellspacing="0" cellpadding="0" align="left" style="margin:0 auto" bgcolor="transparent">
 
 <tbody><tr><td style="padding:0;font-size:0" colspan="3" height="40">&nbsp;</td></tr>
 
 <tr>
  
  <td style="text-decoration:none" width="165" align="left" valign="middle"><a style="text-decoration:none" href="https://click.emails.avast.com/?qs=3b153b7c9315a2264ccab61d4d407eb093ead9cc13d66bd1f099261e6ffdb0c82d9ffd913d12cb3542f2eecdc4e47fc1f3835d9373d3c2f3026e7b720020c39d" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://click.emails.avast.com/?qs%3D3b153b7c9315a2264ccab61d4d407eb093ead9cc13d66bd1f099261e6ffdb0c82d9ffd913d12cb3542f2eecdc4e47fc1f3835d9373d3c2f3026e7b720020c39d&amp;source=gmail&amp;ust=1693109210764000&amp;usg=AOvVaw2KRO5F0viYiefXdBYhaSij"><img src="https://ci6.googleusercontent.com/proxy/1waCxYvwgQi1uofTItnlKIuKlpK06Cp8-hlNeuTyhp1Rgsflr62rv2n9PIKMXx0xHw5Wn67hzfCVgUxeJdvXvi5080-r-i2heWLgzVm_yfAEiSDn282ZeKKK0SehXjRy0ja7IiRANrt2BOdBZimcEBlPgZm_=s0-d-e1-ft#https://image.emails.avast.com/lib/fe9613737564027970/m/4/b9159308-389c-4a32-bf85-46f08f054dd2.png" title="Avast Software" alt="Avast Software" style="border:0;height:auto;text-decoration:none" width="200" align="left" class="CToWUd" data-bit="iit"></a></td>
  
  <td style="padding:0;font-size:0" width="20">&nbsp;</td>

  
  
 </tr>
 
 <tr><td style="padding:0;font-size:0" colspan="3" height="30">&nbsp;</td></tr>
 
</tbody></table>
   </td>
  </tr><tr><td valign="top">
  

   
  <table cellpadding="0" cellspacing="0" width="100%" background="#m_-270298275480843986_ffffff" style="direction:ltr">
    <tbody><tr><td height="0" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
    <tr>
      <td style="padding:0;font-size:0" width="5%" class="m_-270298275480843986spacer30">&nbsp;</td>
      <td>
        <table cellpadding="0" cellspacing="0" width="100%" style="direction:ltr">
          <tbody><tr><td height="0" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
          
          <tr>
            <td style="padding:0;font-size:0" width="1.7%" class="m_-270298275480843986spacer10">&nbsp;</td>

            <td style="padding:0;font-size:0" width="1.7%" class="m_-270298275480843986spacer10">&nbsp;</td>
          </tr>
          
          <tr><td height="8" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
          <tr>
            <td style="padding:0;font-size:0" width="1.7%" class="m_-270298275480843986spacer10">&nbsp;</td>
            <td style="font-family:Arial,Helvetica,sans-serif;font-size:48px;font-weight:700;line-height:62px;color:#071d2b" align="center">${fullName}</td>
            <td style="padding:0;font-size:0" width="1.7%" class="m_-270298275480843986spacer10">&nbsp;</td>
          </tr>
          <tr><td height="24" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
          
          <tr><td height="0" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
          <tr>
            <td style="padding:0;font-size:0" width="1.7%" class="m_-270298275480843986spacer10">&nbsp;</td>
            <td style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:400;line-height:26px;color:#838d95" align="center">${message}</td>
            <td style="padding:0;font-size:0" width="1.7%" class="m_-270298275480843986spacer10">&nbsp;</td>
          </tr>
          <tr><td height="24" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
          
          <tr>
            <td colspan="6">
              
              <table width="100%" cellspacing="0" cellpadding="0" style="direction:ltr">
  
 <tbody><tr>
  
  <td style="font-size:0px;line-height:0px" align="center" bgcolor="transparent" width="auto" valign="middle"><img src="https://ci5.googleusercontent.com/proxy/9T7-VmfPalYPyJrJajbeKG6axGVYJSKZugi7KiaFFmX8wcdxgvt3kcgZwJsS5bk-3gcQZJwDaxt8AugSKftUvzhb0EWsRkpegUrRTml79tTQ8eQGQ4PW_eZ9xezUbXuwUTFoIAD7Wv737_Q3IzUdE8_85SdL=s0-d-e1-ft#https://image.emails.avast.com/lib/fe9613737564027970/m/7/ad34b538-d46b-47c6-96f1-8f566acba148.png" alt="Back o School offer" title="Back o School offer" style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:400;line-height:26px;border:0;max-width:550px;width:100%;height:auto;text-align:center;color:#000000;vertical-align:top;direction:ltr" width="550" class="CToWUd a6T" data-bit="iit" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 522px; top: 815.188px;"><div id=":u8" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Download attachment " jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc3NDMyOTAzNDgxNDAzNTkxMCIsbnVsbCxbXV0." data-tooltip-class="a1V" jsaction="JIbuQc:.CLIENT" data-tooltip="Download"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div> </td>
  
  
 </tr>
</tbody></table>
            </td>
          </tr>
          <tr><td height="0" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
        </tbody></table>
      </td>
      <td style="padding:0;font-size:0" width="5%" class="m_-270298275480843986spacer30">&nbsp;</td>
    </tr>  
    <tr><td height="24" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
  </tbody></table>

  
  <table cellpadding="0" cellspacing="0" width="100%" style="direction:ltr" bgcolor="#ffffff">
    <tbody><tr><td height="0" style="font-size:0;padding:0" colspan="6">&nbsp;</td></tr>
    <tr>
      <td style="padding:0;font-size:0" width="8%" class="m_-270298275480843986spacer50">&nbsp;</td>  
      <td valign="top">
    
       
      </td>
      
        `
      };
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            return res.status(500).json({error});
          }
         console.log('Email sent:', info.response);
         res.status(500).json({isMessageSent: true});
      });
   }
   catch(error) {
      res.status(500)
      let data = {"status": failed}
      res.send(data)
   } 
});

app.get('/', async function(req, res){
  res.status(200)
  let obj = {
    "name": "Rahul DasGupta",
    "city": "Dimapur",
    "message": "Best wishes for your future!"
  }
  res.send(obj)
})

app.listen(PORT, (error) => {});