import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";



export default function CharacterCard({ char }) {
  return (
  // <span>todo: character</span>;
  <Card>
    <Image src={char.image}/>
      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>{char.species}</Card.Meta>
        <Card.Description>{char.location.name}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes:
        </a>
      </Card.Content>

  </Card>
  )
}
