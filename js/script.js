var oldAppId = ''
function appChanged (select) {
  var appId = select.selectedOptions[0].value
  var appCSS = document.querySelectorAll("link[href='apps/"+ oldAppId +"/dist/static/css/app.css']");
  var appManifest = document.querySelectorAll("script[src='apps/"+ oldAppId +"/dist/static/js/manifest.js']");
  var appVendor = document.querySelectorAll("script[src='apps/"+ oldAppId +"/dist/static/js/vendor.js']");
  var appJs = document.querySelectorAll("script[src='apps/"+ oldAppId +"/dist/static/js/app.js']");
  var oldApp = document.getElementById(oldAppId);
  var mountApp = document.createElement('div');
  mountApp.id = appId;
  document.getElementById('appContainer').append(mountApp)
  if (oldApp) oldApp.remove();
  if (appCSS.length > 0) appCSS[0].remove();
  if (appManifest.length > 0) appManifest[0].remove();
  if (appVendor.length > 0) appVendor[0].remove();
  if (appJs.length > 0) appJs[0].remove();
  oldAppId = appId
  getScripts(appId);
}

function getScripts(app) {
  var timeStamp = new Date().valueOf();
  console.log('loaded!!!')
  const p1 = new Promise(
    function(resolve, reject) {
      try {
        var link = document.createElement('link');
        link.href = 'apps/' + app + '/dist/static/css/app.css';
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
        resolve('Exito app.css');
      } catch (e) {
        reject(e);
      }
    }
  );
  const p2 = new Promise(
    function(resolve, reject) {
      var js_url_root = 'apps/' + app + '/dist/static/js/manifest.js';
      try {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = false;
        po.src = js_url_root;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
        resolve('Exito manifest.js')
      } catch (e) {
        reject(e);
      }
    }
  );
  const p3 = new Promise(
    function(resolve, reject) {
      var js_url_root = 'apps/' + app + '/dist/static/js/vendor.js';
      try {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = false;
        po.src = js_url_root;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
        resolve('Exito vendor.js')
      } catch (e) {
        reject(e);
      }
    }
  );
  const p4 = new Promise(
    function(resolve, reject) {
      var js_url_root = 'apps/' + app + '/dist/static/js/app.js';
      try {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = false;
        po.src = js_url_root;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
        resolve('Exito app.js')
      } catch (e) {
        reject(e);
      }
    }
  );
  p1.then(
    function(e) {
      console.log(e);
      p2.then(function(e) {
          console.log(e);
          p3.then(function(e) {
              console.log(e);
              p4.then(function(e) {
                  console.log(e);
                })
                .catch(function(reason) {
                  console.log('Manejar promesa rechazada P4 (' + reason + ') aquí.');
                })
            })
            .catch(function(reason) {
              console.log('Manejar promesa rechazada P3 (' + reason + ') aquí.');
            })
        })
        .catch(function(reason) {
          console.log('Manejar promesa rechazada P2 (' + reason + ') aquí.');
        })
    }).catch(function(reason) {
    console.log('Manejar promesa rechazada P1 (' + reason + ') aquí.');
  })
}