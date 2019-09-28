const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(cors());


server.use(routes);

server.listen(port, () => {
    console.log(`Node Server is running on port ${port} 🚀 
    


                       ............................................7......~...
                       ..........................................I...I+?I.....
                       ........................................,:..??77=..~ ..     
                       .........,...N.........................=..=II77?..:....
    FFFFFFFFFFFFFFFFFFFFFF.~.DM..8 .........................=II7=7..,.........CCCCCCCCCCCCC
    F::::::::::::::::::::F+..MMN.................I.......:.~$I$$I..:...... CCC::::::::::::C
    F::::::::::::::::::::F:..MMM?.Z ......+.....I..$?7: ...$+7I?..?......CC:::::::::::::::C
    FF::::::FFFFFFFFF::::F...MMNN..,.....$..DZZ+. $7I$Z...Z$II$7.~......C:::::CCCCCCCC::::C
      F:::::F       FFFFFF.I.MMMM8.$:......8Z78I..,$$$$..~I$I7Z..~.....C:::::C       CCCCCC
      F:::::F          ....O ,MMNM...ODD?..DOZ87:..IZ7?..$Z$$7$.......C:::::C
      F::::::FFFFFFFFFF.... ..NNDNM..D88D..:O8Z$$..$7??~.I$$=7+.7.....C:::::C
      F:::::::::::::::F.....8.7MMNN=.7NDD:..8ZZZZ..,I$?:.II$77........C:::::C
      F:::::::::::::::F......,.MMNDN..DNDO...OZ7I=..~Z?,.$$:=?........C:::::C
      F::::::FFFFFFFFFF......Z.,NMDN=.~DD8+..7O$$,.?....$$Z??,.=......C:::::C
      F:::::F          .......8.?NNNN..8D8D........ZZ$$$7ZIZ=.,.......C:::::C
      F:::::F          ..........DNDMD......O8ZO$$ZO7$O7$$I7..= .......C:::::C       CCCCCC
    FF:::::::FF        ........:..NNNNDD$O8O8Z$$ZOZO$ZZ$$O?=.=..........C:::::CCCCCCCC::::C
    F::::::::FF        .........?..DNNN8DD8888OZZ?Z$ZI$$I8..=............CC:::::::::::::::C
    F::::::::FF        ..........,..ZN8DDOD8OOO$Z$$$O$Z7$..?.............. CCC::::::::::::C
    FFFFFFFFFFF        ............7..OD888ZOZZ77Z$$I7,...:...................CCCCCCCCCCCCC
                       ..................7...I88ZOZ7Z+.....O..................
                       ....................O$.........~=,.....................
                       .......................................................
                                                                                
           
   

    `);
});