"use strict";
app.get("/teammembers", function (res) {
    listTeamMember(res);
});
function listTeamMember(teammembers) {
    teammembers.map(function (teammember, i) {
        var _a;
        $('#container-team-member')
            .child({
            index: i,
            classes: ['card', 'text-muted', 'mb-3', 'ml-2'],
            attr: [{ name: 'style', value: 'width: 25rem' }],
        })
            .child({
            parent: '.card.text-muted.mb-3.ml-2',
            classes: ['d-flex', 'align-items-center', 'px-3'],
        })
            .child({
            parent: '.d-flex.align-items-center.px-3',
            classes: [
                'size',
                'rounded-circle',
                'overflow-hidden',
                'border',
                'border-dark',
            ],
            attr: [{ name: 'style', value: 'width: 40px; height: 40px' }],
        })
            .child({
            element: 'img',
            parent: '.size.rounded-circle.overflow-hidden.border.border-dark',
            classes: ['card-img-top'],
            attr: [
                {
                    name: 'src',
                    value: (_a = teammember.member_image) !== null && _a !== void 0 ? _a : 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                },
                {
                    name: 'alt',
                    value: teammember.title,
                },
            ],
        })
            .child({
            parent: '.d-flex.align-items-center.px-3',
            classes: ['card-body', 'dd5'],
        })
            .child({
            parent: '.card-body.dd5',
            classes: ['card-title', 'm-0'],
            content: teammember.title,
        })
            .child({
            parent: '.card.text-muted.mb-3.ml-2',
            classes: ['card-body', 'dd4'],
        })
            .child({
            element: 'p',
            parent: '.card-body.dd4',
            classes: ['card-title'],
            content: teammember.description_one,
        })
            .child({
            element: 'p',
            parent: '.card-body.dd4',
            classes: ['card-title'],
            content: teammember.description_two,
        });
    });
}
