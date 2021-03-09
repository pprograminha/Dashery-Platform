function $(elm: string) {
   interface Elements {
      index?: number
      attr?: { name: string; value: string }[]
      content?: string
      element?: string
      classes?: string[]
      parent?: string
   }
   let i: number

   const query = (elm: string) => <HTMLElement>document.querySelector(elm)
   const queryI = (elm: string, i: number) =>
      <HTMLElement>document.querySelectorAll(elm)[i]

   const child = ({
      index,
      content,
      element,
      classes,
      attr,
      parent,
   }: Elements) => {
      i = index != undefined ? index : i
      const ncontent = content != undefined ? content : ''
      const nelement = element != undefined ? element : 'div'
      const celement = document.createElement(nelement)

      celement.textContent = ncontent

      attr?.map((atr) => {
         celement.setAttribute(atr.name, atr.value)
      })
      classes?.map((cls) => {
         celement.classList.add(cls)
      })

      if (!parent) {
         query(elm).appendChild(celement)
      } else {
         queryI(parent, i).appendChild(celement)
      }
      return { child }
   }
   return { child }
}
interface Elements {
   data?: { [key: string]: string }
   dataType?: 'json'
   method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
   contentType?: 'application/json' | 'application/x-www-form-urlencoded'
   url?: string
   success?: (response: any) => void
   beforeSend?: () => void
}
const _$ = {
   ajax: ({
      data,
      dataType,
      method,
      contentType,
      url,
      success,
      beforeSend,
   }: Elements) => {
      const xhr = new XMLHttpRequest()

      xhr.responseType = dataType ? dataType : 'json'
      if (method && url) {
         xhr.open(method, url)
         xhr.setRequestHeader(
            'content-type',
            contentType ? contentType : 'application/x-www-form-urlencoded'
         )
      }
      if (success) {
         xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
               success(xhr.response)
            }
         }
      }
      if (beforeSend) {
         xhr.onloadstart = beforeSend
      }
      if (data) {
         xhr.send(JSON.stringify(data))
      } else {
         xhr.send()
      }
   },
}
const http = {
   url: 'http://127.0.0.1:3333/api',
   get: (resource: string, callbackFn: (res: any) => void) => {
      console.log(http.url + resource)
      _$.ajax({
         url: http.url + resource,
         method: 'GET',
         dataType: 'json',
         success: (response) => {
            callbackFn(response)
         },
      })
   },
   post: (
      resource: string,
      callbackFn: (res: any) => void,
      datas: { [key: string]: string }
   ) => {
      _$.ajax({
         url: http.url + resource,
         method: 'POST',
         contentType: 'application/json',
         data: datas,
         dataType: 'json',
         success: (response) => {
            callbackFn(response)
         },
      })
   },
   put: (
      resource: string,
      callbackFn: (res: any) => void,
      datas: { [key: string]: string }
   ) => {
      _$.ajax({
         url: http.url + resource,
         method: 'PUT',
         contentType: 'application/json',
         data: datas,
         dataType: 'json',
         success: (response) => {
            callbackFn(response)
         },
      })
   },
   delete: (resource: string, callbackFn: (res: any) => void) => {
      _$.ajax({
         url: http.url + resource,
         method: 'DELETE',
         contentType: 'application/json',
         dataType: 'json',
         success: (response) => {
            callbackFn(response)
         },
      })
   },
}
