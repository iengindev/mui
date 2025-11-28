import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => (
    <>
      <div>
      </div>
    </>
  )
})

{/* <div>
        <MButton label='Submit' size='small'/>
        <MButton label='Submit'/>
        <MButton label='Submit' size='large'/>

        <MButton label='Submit' severity='secondary' size='small'/>
        <MButton label='Submit' severity='secondary'/>
        <MButton label='Submit' severity='secondary' size='large'/>

        <MButton label='Submit' severity='info' size='small'/>
        <MButton label='Submit' severity='info'/>
        <MButton label='Submit' severity='info' size='large'/>

        <MButton label='Submit' severity='success' size='small'/>
        <MButton label='Submit' severity='success'/>
        <MButton label='Submit' severity='success' size='large'/>

        <MButton label='Submit' severity='warning' size='small'/>
        <MButton label='Submit' severity='warning'/>
        <MButton label='Submit' severity='warning' size='large'/>

        <MButton label='Submit' severity='danger' size='small'/>
        <MButton label='Submit' severity='danger'/>
        <MButton label='Submit' severity='danger' size='large'/>

        <MButton label='Submit' severity='help' size='small'/>
        <MButton label='Submit' severity='help'/>
        <MButton label='Submit' severity='help' size='large'/>
      </div>

      <div>
        <MButton label='Submit' size='small' badge="9+"/>
        <MButton label='Submit' badge="9+"/>
        <MButton label='Submit' size='large' badge="9+"/>

        <MButton label='Submit' severity='secondary' size='small' badge="2"/>
        <MButton label='Submit' severity='secondary' badge="2"/>
        <MButton label='Submit' severity='secondary' size='large' badge="2"/>

        <MButton label='Submit' severity='info' size='small' badge="2"/>
        <MButton label='Submit' severity='info' badge="2"/>
        <MButton label='Submit' severity='info' size='large' badge="2"/>

        <MButton label='Submit' severity='success' size='small' badge="2"/>
        <MButton label='Submit' severity='success' badge="2"/>
        <MButton label='Submit' severity='success' size='large' badge="2"/>

        <MButton label='Submit' severity='warning' size='small' badge="2"/>
        <MButton label='Submit' severity='warning' badge="2"/>
        <MButton label='Submit' severity='warning' size='large' badge="2"/>

        <MButton label='Submit' severity='danger' size='small' badge="2"/>
        <MButton label='Submit' severity='danger' badge="2"/>
        <MButton label='Submit' severity='danger' size='large' badge="2"/>

        <MButton label='Submit' severity='help' size='small' badge="2"/>
        <MButton label='Submit' severity='help' badge="2"/>
        <MButton label='Submit' severity='help' size='large' badge="2"/>
      </div>

      <div>
        <MButton label='Submit' size='small' disabled/>
        <MButton label='Submit' disabled/>
        <MButton label='Submit' size='large' disabled/>

        <MButton label='Submit' severity='secondary' size='small' disabled/>
        <MButton label='Submit' severity='secondary' disabled/>
        <MButton label='Submit' severity='secondary' size='large' disabled/>

        <MButton label='Submit' severity='info' size='small' disabled/>
        <MButton label='Submit' severity='info' disabled/>
        <MButton label='Submit' severity='info' size='large' disabled/>

        <MButton label='Submit' severity='success' size='small' disabled/>
        <MButton label='Submit' severity='success' disabled/>
        <MButton label='Submit' severity='success' size='large' disabled/>

        <MButton label='Submit' severity='warning' size='small' disabled/>
        <MButton label='Submit' severity='warning' disabled/>
        <MButton label='Submit' severity='warning' size='large' disabled/>

        <MButton label='Submit' severity='danger' size='small' disabled/>
        <MButton label='Submit' severity='danger' disabled/>
        <MButton label='Submit' severity='danger' size='large' disabled/>

        <MButton label='Submit' severity='help' size='small' disabled/>
        <MButton label='Submit' severity='help' disabled/>
        <MButton label='Submit' severity='help' size='large' disabled/>
      </div>

      <div>
        <MButton label='Submit' size='small' variant='text'/>
        <MButton label='Submit' variant='text'/>
        <MButton label='Submit' size='large' variant='text'/>

        <MButton label='Submit' severity='secondary' size='small' variant='text'/>
        <MButton label='Submit' severity='secondary' variant='text'/>
        <MButton label='Submit' severity='secondary' size='large' variant='text'/>

        <MButton label='Submit' severity='info' size='small' variant='text'/>
        <MButton label='Submit' severity='info' variant='text'/>
        <MButton label='Submit' severity='info' size='large' variant='text'/>

        <MButton label='Submit' severity='success' size='small' variant='text'/>
        <MButton label='Submit' severity='success' variant='text'/>
        <MButton label='Submit' severity='success' size='large' variant='text'/>

        <MButton label='Submit' severity='warning' size='small' variant='text'/>
        <MButton label='Submit' severity='warning' variant='text'/>
        <MButton label='Submit' severity='warning' size='large' variant='text'/>

        <MButton label='Submit' severity='danger' size='small' variant='text'/>
        <MButton label='Submit' severity='danger' variant='text'/>
        <MButton label='Submit' severity='danger' size='large' variant='text'/>

        <MButton label='Submit' severity='help' size='small' variant='text'/>
        <MButton label='Submit' severity='help' variant='text'/>
        <MButton label='Submit' severity='help' size='large' variant='text'/>
      </div>

      <div>
        <MButton label='Submit' size='small' variant='outlined'/>
        <MButton label='Submit' variant='outlined'/>
        <MButton label='Submit' size='large' variant='outlined'/>

        <MButton label='Submit' severity='secondary' size='small' variant='outlined'/>
        <MButton label='Submit' severity='secondary' variant='outlined'/>
        <MButton label='Submit' severity='secondary' size='large' variant='outlined'/>

        <MButton label='Submit' severity='info' size='small' variant='outlined'/>
        <MButton label='Submit' severity='info' variant='outlined'/>
        <MButton label='Submit' severity='info' size='large' variant='outlined'/>

        <MButton label='Submit' severity='success' size='small' variant='outlined'/>
        <MButton label='Submit' severity='success' variant='outlined'/>
        <MButton label='Submit' severity='success' size='large' variant='outlined'/>

        <MButton label='Submit' severity='warning' size='small' variant='outlined'/>
        <MButton label='Submit' severity='warning' variant='outlined'/>
        <MButton label='Submit' severity='warning' size='large' variant='outlined'/>

        <MButton label='Submit' severity='danger' size='small' variant='outlined'/>
        <MButton label='Submit' severity='danger' variant='outlined'/>
        <MButton label='Submit' severity='danger' size='large' variant='outlined'/>

        <MButton label='Submit' severity='help' size='small' variant='outlined'/>
        <MButton label='Submit' severity='help' variant='outlined'/>
        <MButton label='Submit' severity='help' size='large' variant='outlined'/>
      </div>

      <div>
        <MButton label='Submit' size='small' rounded/>
        <MButton label='Submit' rounded/>
        <MButton label='Submit' size='large' rounded/>

        <MButton label='Submit' severity='secondary' size='small' rounded/>
        <MButton label='Submit' severity='secondary' rounded/>
        <MButton label='Submit' severity='secondary' size='large' rounded/>

        <MButton label='Submit' severity='info' size='small' rounded/>
        <MButton label='Submit' severity='info' rounded/>
        <MButton label='Submit' severity='info' size='large' rounded/>

        <MButton label='Submit' severity='success' size='small' rounded/>
        <MButton label='Submit' severity='success' rounded/>
        <MButton label='Submit' severity='success' size='large' rounded/>

        <MButton label='Submit' severity='warning' size='small' rounded/>
        <MButton label='Submit' severity='warning' rounded/>
        <MButton label='Submit' severity='warning' size='large' rounded/>

        <MButton label='Submit' severity='danger' size='small' rounded/>
        <MButton label='Submit' severity='danger' rounded/>
        <MButton label='Submit' severity='danger' size='large' rounded/>

        <MButton label='Submit' severity='help' size='small' rounded/>
        <MButton label='Submit' severity='help' rounded/>
        <MButton label='Submit' severity='help' size='large' rounded/>
      </div> */}