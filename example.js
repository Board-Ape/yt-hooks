class ExampleComponent extends React.Component {
    constructor(super) {
        super(props)
        this.state = {
            name: 'Sam',
            surname: 'Singer'
        }
    }

    componentWillMount() {
        this.setState({ surname: 'Singer' })
    }
    
    render() {
        return(

        )
    }
 }