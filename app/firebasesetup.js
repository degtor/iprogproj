var ref = new Firebase("https://sizzling-torch-8958.firebaseio.com");

ref.remove();
ref.push({
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