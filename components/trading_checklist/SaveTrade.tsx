import React from 'react'
import { Button } from 'semantic-ui-react'
import {Grid} from 'semantic-ui-react'
// import Link from 'next/link'

const SaveTrade = () => {

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return (
        <>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column float='right' textAlign='right'>    
            <Button.Group>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button.Or />

                <Button positive type="submit">Save</Button>
          </Button.Group></Grid.Column>
        </Grid.Row>
    </>
  )


}

  export default SaveTrade