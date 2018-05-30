import 'bootstrap/dist/css/bootstrap.min.css';

let me = 'Bratishka';

let func = () => {
  console.log(`Here is your bundle, ${me}`);

};

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log(i);
  }
}


func();
