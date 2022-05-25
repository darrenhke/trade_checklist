import React from 'react'
import { Button } from 'semantic-ui-react'
import {Grid} from 'semantic-ui-react'


const SaveTrade = () => {

  return (
        <>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column float='right' textAlign='right'>    
            <Button.Group>
              <Button>Cancel</Button>
              <Button.Or />
              <Button positive>Save</Button>
          </Button.Group></Grid.Column>
        </Grid.Row>
    </>
  )


}

  export default SaveTrade