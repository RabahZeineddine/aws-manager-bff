

export class CreateQueueDTO {
  name: string
  tags: { [key: string]: string }
}


export class DeleteQueueDTO {
  url: string
}
