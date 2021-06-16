"use strict";
function $(elm) {
    var i;
    var query = function (elm) { return document.querySelector(elm); };
    var queryI = function (elm, i) {
        return document.querySelectorAll(elm)[i];
    };
    var child = function (_a) {
        var index = _a.index, content = _a.content, element = _a.element, classes = _a.classes, attr = _a.attr, parent = _a.parent;
        i = index != undefined ? index : i;
        var ncontent = content != undefined ? content : '';
        var nelement = element != undefined ? element : 'div';
        var celement = document.createElement(nelement);
        celement.textContent = ncontent;
        attr === null || attr === void 0 ? void 0 : attr.map(function (atr) {
            celement.setAttribute(atr.name, atr.value);
        });
        classes === null || classes === void 0 ? void 0 : classes.map(function (cls) {
            celement.classList.add(cls);
        });
        if (!parent) {
            query(elm).appendChild(celement);
        }
        else {
            queryI(parent, i).appendChild(celement);
        }
        return { child: child };
    };
    return { child: child };
}
var _$ = {
    ajax: function (_a) {
        var data = _a.data, dataType = _a.dataType, method = _a.method, contentType = _a.contentType, url = _a.url, success = _a.success, beforeSend = _a.beforeSend;
        var xhr = new XMLHttpRequest();
        xhr.responseType = dataType ? dataType : 'json';
        if (method && url) {
            xhr.open(method, url);
            xhr.setRequestHeader('content-type', contentType ? contentType : 'application/x-www-form-urlencoded');
        }
        if (success) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    success(xhr.response);
                }
            };
        }
        if (beforeSend) {
            xhr.onloadstart = beforeSend;
        }
        if (data) {
            xhr.send(JSON.stringify(data));
        }
        else {
            xhr.send();
        }
    },
};
var app = {
    url: 'http://127.0.0.1:3333/api',
    get: function (resource, callbackFn) {
        console.log(app.url + resource);
        _$.ajax({
            url: app.url + resource,
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                callbackFn(response);
            },
        });
    },
    post: function (resource, callbackFn, datas) {
        _$.ajax({
            url: app.url + resource,
            method: 'POST',
            contentType: 'application/json',
            data: datas,
            dataType: 'json',
            success: function (response) {
                callbackFn(response);
            },
        });
    },
    put: function (resource, callbackFn, datas) {
        _$.ajax({
            url: app.url + resource,
            method: 'PUT',
            contentType: 'application/json',
            data: datas,
            dataType: 'json',
            success: function (response) {
                callbackFn(response);
            },
        });
    },
    delete: function (resource, callbackFn) {
        _$.ajax({
            url: app.url + resource,
            method: 'DELETE',
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                callbackFn(response);
            },
        });
    },
};
