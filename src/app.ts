import Alpine from 'alpinejs';
console.log('app.ts');

Alpine.store('person', {
    title:'Dr.',
    name: 'Bob'
})

Alpine.start()
