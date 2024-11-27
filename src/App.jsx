import Button from "./Button";
import Card from "./Card";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import DigitalClock from "./DigitalClock";
import List from "./List";
import MyComponent from "./MyComponent";
import MyComponents from "./MyComponents";
import  ProfilePicture from "./ProfilePicture";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import Array from "./Array";
import Car from "./Car";

function App() {

  const fruits=[{id:1,name:"kiwi",calories:60}
    ,{id:2,name:"orange",calories:70}
    ,{id:3,name:"avocado",calories:100}
    ,{id:4,name:"pineapple",calories:70}];
    
    const vegetables=
      [{id:5,name:"potatoes",calories:110}
      ,{id:6,name:"onions",calories:50}
      ,{id:7,name:"corn",calories:63}
      ,{id:8,name:"brocoli",calories:50}];

  return(
    <>
  <Car/>
    <Array/>

    <ColorPicker/>
    <MyComponents/>
    <Counter/>
    <MyComponent/>
      <Button/>
      {fruits.length >0 && <List items={fruits} category ="Fruits"/>},
      {vegetables.length >0  &&  <List items={vegetables} category ="Vegetables"/>},
      
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Student name="Sora" age={23} isStudent={true}/>
    <Student name="Aleks" age={28} isStudent={false}/>
    <Student name="nAts" age={30} isStudent={false}/>
    <Student name="amanda" age={27} isStudent={true}/>
    <Student  />
    <UserGreeting isLoggedIn={true} username="Ninja"/>
    <UserGreeting/>
    {/* <List/> */}
    <DigitalClock/>
    <ProfilePicture/>
    
    </>
  );

}

export default App
