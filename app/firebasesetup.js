var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

ref.remove();
ref.push({
        page1: {
            'id': 1,
            'name': 'Problem/Opportunity',
            'problem': '',
            'opportunity': '',
            'problem2': '',
            'opportunity2': ''
            },

        page2: {
            'id': 2,
            'name': 'Value proposition',
            'answer': ''
        },

        page3: {
            'id': 3,
            'name': 'Underlying Magic',
            'answer': ''
        },

        page4: {
            'id': 4,
            'name': 'Business Model',
            'answer': ''
        },

        page5: {
            'id': 5,
            'name': 'Go-to-market Plan',
            'answer': ''
        },

        page6: {
            'id': 6,
            'name': 'Competitive Analysis',
            'answer': ''
        },

        page7: {
            'id': 7,
            'name': 'Title',
            'answer': ''
        }
});