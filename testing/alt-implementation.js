let nav = document.querySelectorAll( '.nav a' );
nav.forEach( item => {
  item.addEventListener( 'mouseenter', function ( event ) {
    event.target.style.color = 'purple';
  } )
  item.addEventListener( 'mouseleave', function ( event ) {
    event.target.style.color = null;
  } )
} );

let image = document.querySelectorAll( "img" );
image.forEach( ( item ) => {
  item.addEventListener( 'dblclick', function ( event ) {
    event.target.setAttribute( 'src', 'https://i.pinimg.com/originals/63/8b/da/638bda237d691d6f6f26f0599fbfd607.jpg' )
    item.preventDefault();
  } )
} );


let sign = document.querySelectorAll( '.btn' );
sign.forEach( item => {
  item.addEventListener( 'click', function ( event ) {
    prompt( "Whats Your Email?" );
  } );
  item.addEventListener( 'auxclick', function ( event ) {
    alert( "You Don't Have The Permissions Sway!!!" );
  } );


} );

let size = document.getElementById( 'size' );
window.addEventListener( 'resize', function () {
  size.innerText = 'Stop Stretching Me!';
  setTimeout( function () {
    size.style.display = null;
  }, 1000 );
} );

document.addEventListener( 'keypress', function () {
  alert( "Don't Press my buttons, You wouldn't like me when I'm angry!" );
} )

let welcome = document.querySelector( '.intro h2' );
welcome.addEventListener( 'mouseover', function ( event ) {
  event.target.style.color = 'blue';
} )
welcome.addEventListener( 'mouseleave', function ( event ) {
  event.target.style.color = null;
} )

let pickDestinationBtn = document.querySelector( '.content-destination h2' );
pickDestinationBtn.addEventListener( 'mousedown', function ( event ) {
  event.target.style.color = 'red';
} )
pickDestinationBtn.addEventListener( 'mouseup', function ( event ) {
  event.target.style.color = 'green';
} )
