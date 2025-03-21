const wordsArray = [
    '<b>veneer</b><br><hr><p>a superficial or deceptively attractive appearance, display or effect</p>',
    '<b>deign</b><br><hr><p>do something that one considers to be beneath one\'s dignity.</p>',
    '<b>demure</b><br><hr><p>reserved, modest, and shy</p>',
    '<b>visage</b><br><hr><p>the face, countenance, or appearance of a person or sometimes an animal</p>',
    '<b>otiose</b><br><hr><p>producing no useful result</p>',
    '<b>ephemeral</b><br><hr><p>lasting for a very short time</p>',
    '<b>vehement</b><br><hr><p>showing strong feeling; forceful, passionate, or intense.</p>',
    '<b>syndicate</b><br><hr><p>a group of individuals or organizations combined to promote some common interest.</p>',
    '<b>dismal</b><br><hr><p>depressing; dreary.</p>',
    '<b>altruistic</b><br><hr><p>showing a disinterested and selfless concern for the well-being of others; unselfish.</p>',
    '<b>errant</b><br><hr><p>erring or straying from the proper course or standards.</p>',
    '<b>monachopsis</b><br><hr><p>the subtle but persistent feeling of being out of place or not belonging</p>',
    '<b>immolate</b><br><hr><p>kill or offer as a sacrifice, especially by burning.</p>',
    '<b>lovesick</b><br><hr><p>in love, or missing the person one loves, so much that one is unable to act normally.</p>',
    '<b>somatic</b><br><hr><p>relating to the body, especially as distinct from the mind.</p>',
    '<b>endemic</b><br><hr><p>of a disease: regularly occurring within an area or community.</p>',
    '<b>capitulate</b><br><hr><p>cease to resist an opponent or an unwelcome demand; surrender.</p>',
    '<b>odious</b><br><hr><p>extremely unpleasant; repulsive.</p>',
    '<b>fallacy</b><br><hr><p>a mistaken belief, especially one based on unsound argument.</p>',
    '<b>canonize</b><br><hr><p>(in the Roman Catholic Church) officially declare (a dead person) to be a saint.</p>',
    '<b>sardonic</b><br><hr><p>grimly mocking or cynical.</p>',
    '<b>finagle</b><br><hr><p>to get or achieve something by guile, trickery, or manipulation.',
    '<b>guile</b><br><hr><p>sly or cunning intelligence.</p>',
    '<b>contrived</b><br><hr><p>deliberately created rather than arising naturally or spontaneously</p>',
    '<b>arduous</b><br><hr><p>involving or requiring strenuous effort; difficult and tiring.</p>'

];


var btn = document.getElementById('btn');
var word = document.getElementById('word');
function generate(){
    const ranIndex = Math.floor(Math.random() * wordsArray.length);
    word.innerHTML = wordsArray[ranIndex];
}
generate();