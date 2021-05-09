import { createServer, Model } from 'miragejs';
export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      participants: Model,
    },
    seeds(server) {
      server.create(
        {"id":1,"name":"Ariel Bernardoux","age":25,"dob":"10/07/1956","locality":4,"noOfGuest":2,"address":"88 Algoma Terrace","profession":2}       
      );

    },
    routes() {
      this.namespace = 'api/participants';
      this.get('/', (schema, request) => {
        return schema.notes.all();
      });
      this.get('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.participants.find(id);
      });
      this.post('/', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.participants.create(attrs);
      });
      this.patch('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let note = schema.participants.find(id);
        return note.update(newAttrs);
      });
      this.delete('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.participants.find(id).destroy();
      });
    },
  });
  return server;
}