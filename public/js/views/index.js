const q = new Confirm({ message: 'Choose wisely...', title: 'A question' });

q.on('accept', () => {
  alert('Accepted!');
});

q.on('reject', () => {
  alert('Rejected...');
});
