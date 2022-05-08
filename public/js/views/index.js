new Info({ message: 'An info window!', title: 'Informing the crew' });
new Alert({ message: 'An Alert window!', title: 'Something wrong happened here...' });
new Warn({ message: 'A Warn window', title: 'Just a warning... for now...' });
new Confirm({ message: 'Choose wisely...', title: 'A question' });

const body = document.createElement('section');
body.innerHTML = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac porta ante. Praesent vitae rutrum nisl. Aenean libero ipsum, hendrerit vitae sem sed, fringilla facilisis turpis. Etiam vitae tristique velit. Quisque maximus finibus ullamcorper. Phasellus congue convallis lorem rutrum ornare. Sed elementum porta nunc, sit amet condimentum lorem pretium nec. Phasellus quis fringilla leo. Etiam finibus ultrices ligula, varius sodales sem elementum sit amet. Cras id est id justo condimentum blandit. Aenean tincidunt ipsum a lacus porta eleifend. Cras dictum turpis nec dolor facilisis eleifend. Integer congue eros ut arcu venenatis, eget ultrices eros gravida. Nulla tempus massa at ullamcorper mattis. Donec suscipit dui sed quam cursus faucibus. Aenean tincidunt justo sit amet ipsum fringilla, eu auctor ante dictum.</p>
<p>Quisque elementum ut velit maximus eleifend. Proin malesuada interdum lorem, nec maximus nisl fermentum eu. Aliquam eget urna eget ante accumsan rhoncus et quis risus. Phasellus tincidunt malesuada ullamcorper. Sed quis quam urna. Nulla porttitor dolor at leo rutrum, ut volutpat magna luctus. Nullam tortor felis, efficitur ut sapien ac, egestas porta ex. Sed iaculis quis sapien aliquam ultrices. Sed lobortis felis eu ante accumsan, eget maximus purus posuere. In semper nec lectus non euismod. Sed ut purus sed tellus auctor egestas. Fusce commodo fermentum velit iaculis tincidunt. Ut eu hendrerit mi. Morbi scelerisque ipsum in justo facilisis pulvinar.</p>
<p>Ut condimentum aliquam rhoncus. Sed nec orci sed sapien rhoncus convallis eu vitae ipsum. In imperdiet et nisi at molestie. In hac habitasse platea dictumst. Etiam mauris turpis, placerat vel leo et, varius vehicula dolor. Aliquam sagittis hendrerit tincidunt. Vestibulum ut est mauris. Cras rhoncus, ligula vitae placerat mattis, lectus justo facilisis ante, vel bibendum urna quam nec lorem. In et convallis felis. Cras quis sapien felis. Cras quis molestie est, eget maximus neque. Etiam dictum massa quis erat convallis, at euismod ante maximus. Sed auctor diam vitae nulla tempus, id malesuada mi lobortis. Aliquam ultricies rutrum dui vitae egestas. Nulla justo velit, venenatis mattis eleifend ac, sodales eget erat. Mauris ullamcorper, orci nec dapibus volutpat, lacus dolor finibus justo, condimentum convallis mi quam nec felis.</p>
<p>Cras eu velit pharetra, mollis orci at, tempus eros. Sed congue ante dui, id congue leo congue vitae. Quisque at volutpat lorem. Praesent a elementum mauris, non auctor nisi. Vestibulum eu magna nec ex vehicula aliquam sit amet ut quam. Aliquam efficitur turpis egestas quam bibendum, sit amet semper ex porttitor. Praesent dapibus quam sit amet congue pharetra. Phasellus tempor convallis neque et ornare. Sed pretium nibh tellus, iaculis tristique elit feugiat sit amet. Pellentesque vel arcu metus. Phasellus in arcu erat. Mauris varius, lectus quis mattis pulvinar, eros orci congue sem, porttitor rutrum dui felis at justo. Proin nec dui eget neque facilisis pretium sed vel metus.</p>
<p>Nulla sollicitudin, neque et luctus consectetur, sapien felis maximus est, sed mattis ex dolor non justo. Nam consequat ante purus, id euismod mi varius eget. Sed malesuada finibus magna. Vivamus volutpat eleifend accumsan. Nam laoreet eu nisi nec venenatis. Ut id elit at mi maximus malesuada. Donec egestas pharetra accumsan. Sed viverra sit amet sem ac condimentum. Quisque consequat orci felis, id molestie lectus imperdiet at. Integer id pulvinar mi. Quisque id fermentum mauris.</p>`;

new Info({
  message: body,
  title: 'A BIG info window!',
  size: {
    width: '90%',
    height: '400px',
  },
});
