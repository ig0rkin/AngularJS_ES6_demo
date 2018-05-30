import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './app/app.scss';

let me = 'Ihor';

let func = () => {
  console.log(`Here is your bundle, ${me}`);

};

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log(i);
  }
}


func();
