function init() {
    console.log("[I] init");

    for(var channel in Constantes.youtubeVideos){
        console.log(Constantes.youtubeVideos[channel]);
    }

    React.render(<Collection channels={Constantes.youtubeVideos} />, document.body);
   //     React.render(<Iframe channel="epenser" />, document.body);

    console.log("[O] init");
}

var Collection = React.createClass({
        render: function(){
            return (<div>{
                Object.keys(this.props.channels).map(function(channel){
                    return <iframe 
                        width="500"
                        height="300" 
                        src={Constantes.youtubeAddress+Constantes.youtubeVideos[channel]}
                        frameBorder="0" 
                        allowFullScreen></iframe>;
                })
            }</div>);
        }
});

var Iframe = React.createClass({
        render: function(){
            return <iframe 
            width="500"
            height="300" 
            src={Constantes.youtubeAddress+Constantes.youtubeVideos[this.props.channel]}
            frameBorder="0" 
            allowFullScreen></iframe>;
        }
});

$("document").ready( 
    function() {
        init();
    }
);
