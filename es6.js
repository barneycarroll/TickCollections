export class TickMap extends Map {
  constructor(){
    super( ...arguments )

    teardown( this )
  }

  set(){
    super.set( ...arguments )

    teardown( this )
  }
}

export class TickSet extends Set {
  constructor(){
    super( ...arguments )

    teardown( this )
  }

  add(){
    super.add( ...arguments )

    teardown( this )
  }
}

const ticks = new Set()

function teardown( instance ){
  if( !ticks.has( instance ) )
    Promise.resolve(
      ticks.add( instance )
    ).then( () => {
      instance.clear()

      ticks.delete( instance )
    } )
}
