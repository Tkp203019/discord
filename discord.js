 app.post('/interactions', verifyKeyMiddleware('ff25055654d56f5dc3aa68a03b056ceb09eb1979c9737e118e4af0cec04cdb12'), (req, res) => {
  const message = req.body;
  if (message.type === InteractionType.APPLICATION_COMMAND) {
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: 'Hello world',
      },
    });
  }
});
