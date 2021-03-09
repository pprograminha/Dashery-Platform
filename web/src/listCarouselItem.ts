http.get(`/depositions`, (res) => {
   listCarouselItem(res)
})
interface IDeposition {
   id: string
   username: string
   user_image: string | null
   deposition: string
   created_at: Date
}
function listCarouselItem(depositions: IDeposition[]) {
   for (let index = 0; index < depositions.length; index++) {
      $('#container-indicators').child({
         element: 'li',
         classes: [index === 0 ? 'active' : 'noactive'],
         attr: [{ name: 'data-target', value: '#carouselExampleIndicators' }],
      })
   }
   depositions.map((deposition, i) => {
      $('#container-carousel')
         .child({
            index: i,
            classes: ['p1', 'carousel-item', i === 0 ? 'active' : 'item'],
         })
         .child({
            parent: '.p1',
            classes: ['p2', 'card-wrapper', 'pr-1', 'mx-auto'],
            attr: [{ name: 'style', value: 'max-width: 700px' }],
         })
         .child({
            parent: '.p2',
            classes: ['p3', 'card', 'py-3', 'px-2'],
            attr: [
               { name: 'style', value: 'background-color: rgba(0, 0, 0, 0.5)' },
            ],
         })
         .child({
            parent: '.p3',
            classes: ['p4', 'd-flex', 'align-items-center'],
         })
         .child({
            parent: '.p4',
            classes: [
               'p5',
               'card-avatar',
               'rounded-circle',
               'overflow-hidden',
               'flex-shrink-0',
            ],
            attr: [{ name: 'style', value: 'width: 50px; height: 50px' }],
         })
         .child({
            element: 'img',
            parent: '.p5',
            classes: ['p6', 'card-img-bottom'],
            attr: [
               {
                  name: 'src',
                  value: deposition.user_image
                     ? deposition.user_image
                     : 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
               },
               {
                  name: 'alt',
                  value: deposition.username,
               },
            ],
         })
         .child({
            parent: '.p4',
            classes: ['p5-1', 'card-body'],
         })
         .child({
            element: 'h5',
            parent: '.p5-1',
            classes: ['card-title', 'text-muted'],
            content: deposition.username,
         })

         // 2
         .child({
            parent: '.p3',
            classes: ['p4-1', 'card-body'],
         })
         .child({
            element: 'p',
            parent: '.p4-1',
            classes: ['p7-2', 'card-text', 'text-muted'],
         })
         .child({
            element: 'span',
            parent: '.p7-2',
            classes: ['p8-2', 'quote', 'mr-1'],
         })
         .child({
            element: 'i',
            parent: '.p8-2',
            classes: ['fa', 'fa-quote-left'],
         })
         .child({
            element: 'span',
            parent: '.p7-2',
            classes: ['p8-3', 'deposition'],
            content: deposition.deposition,
         })
         .child({
            element: 'span',
            parent: '.p7-2',
            classes: ['p8-4', 'quote', 'ml-1'],
         })
         .child({
            element: 'i',
            parent: '.p8-4',
            classes: ['fa', 'fa-quote-right'],
         })
   })
}
