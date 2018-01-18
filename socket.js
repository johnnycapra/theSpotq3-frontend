socket.on('RECEIVE_POST', (data => {
  console.log(data, 'RECEIVED');
  this.socketPost(data);
}));
socket.emit('SEND_POST', {
  content: this.state.content,
   user_id: this.props.user_id,
   picture_id: parseInt(this.props.match.params.id)
})
socketPost = (data) => {
  console.log(data);
  this.setState({sockcontent: [...this.state.sockcontent, data]})
  console.log("ADDPOSTSOCKDATA", this.state.sockcontent);
}
