# React Native APP
<hr>
<b><a href="https://expo.io/@dalbrnon/MyTestApp">DEMO</a></b>
<hr>

++ <b>Expo</b></br>
++ <b>React Native</b></br>
++ <b>Redux</b></br>
++ <b>Native Base</b></br>
++ <b>Google Maps</b></br>
<hr>

<b>1. Main screen logo + form</b></br></br>
After submitting the form => redirect to second page
<hr>

<b>2. Google map page</b></br></br>
Autofocus on current geoposition with(circled)</br>
Navigation button => move to third screen
<hr>

<b>3. Avatar screen</b></br></br> 
Contains avatar of cirlce shape</br>
Avatar onPress opens camera view</br>
Camera view has three nav buttons: Flip Camera, Snap and Exit</br>
After snap => snap uri is written to Redux store => avatar changes to a new one => camera view closed
<hr>

<b>4. Drawer</b></br></br> 
Opens by swiping from left edge of screen to right</br>
Drawer has three nav links: HomeScreen, MapScreen, AvatarScreen</br>
Upper part contains avatar which loads uri from Redux store(if defined) otherwise uses default placeholder uri.
<hr>

<b>5. Header</b></br></br> 
Header has dinamic title(changes on every screen)</br>
Has two links: Back(except HomeScreen) and open Drawer (additionally you can open drower by swiping from left to right)
<hr>
