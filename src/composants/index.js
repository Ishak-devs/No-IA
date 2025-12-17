

function Index() {

    fetch("/home/ishak/e-commerce-0-ia/traitement/index.java")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

export default Index;