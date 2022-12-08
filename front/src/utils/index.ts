/**
 * iconUrl
 */

 export const iconUrl = "//at.alicdn.com/t/c/font_3765716_4gpu5d5pk98.js";

 export const STATICURL = "http://1.15.184.206:9000/";
 
 export const DEFAULTHTML = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>title</title>
    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" href="https://yun-static.cdn.bcebos.com/yun-dev-tools/favicon.png">
    <script defer src="https://yun-static.cdn.bcebos.com/xxx/x.x.x.js"></script>
    <link href="https://yun-static.cdn.bcebos.com/xxx/x.x.x.css" rel="stylesheet">
  </head>
  <body>
    <div id="ice-container"></div>
  </body>
  </html>`;
 
 export const layoutPage = ["/login"];
 
 export const getLocalStore = (name: string) => {
   try {
     const content = localStorage.getItem(name);
     if (content !== null) {
       return JSON.parse(content);
     }
   } catch (error) {
     console.log(error);
   }
 };
 
 export const unsetLocalStore = (name) => {
   localStorage.removeItem(name);
 };
 
 export const setLocalStore = (name: string, content: any) => {
   localStorage.setItem(name, JSON.stringify(content));
 };
 
 export const getJWTToken = () => {
   return getLocalStore("jwt-token");
 };
 