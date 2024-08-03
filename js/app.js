const mainContent = document.getElementById("main-content");
let page = "index";
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      page = button.getAttribute("data-page");
      loadPage(page);
    });
  });
  document.getElementById("mapaWeb").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      page = event.target.getAttribute("data-page");
      loadPage(page);
    }
  });
  loadPage(page);
});

function loadPage(page) {
  let content = "";
  switch (page) {
    case "index":
      content = indexContent;
      break;
    case "plans":
      content = plansContent;
      break;
    case "nouClient":
      content = nouClientContent;
      break;
    case "botiga":
      content = botigaContent;
      break;
    case "logIn":
      content = logInContent;
      break;
    case "listaClientes":
      content = listaContent;
      break;
    case "contact":
      content = contactContent;
      break;
    case "polPriv":
      content = polPrivContent;
      break;
    default:
      content = indexContent;
  }

  mainContent.innerHTML = content;
  if (page === "nouClient") {
    document
      .getElementById("nomNOU")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        anyadir();
      });
  }
  if (page === "listaClientes") {
    listarCli();
  }
}

const indexContent = `
                        <h2 class="h2botiga"><i>Sobre nosaltres</i></h2>
                        <br>
                        <article id="welcome">
                        <h2></h2>
                        <p>En la nostra clínica veterinària, ens enorgulleix oferir atenció compassiva i experta per a les mascotes dels nostres clients. Amb una obertura prevista per a aquest estiu, 
                                estem compromesos a proporcionar un entorn segur i acollidor on les mascotes i els seus amos se sentin còmodes i cures. 
                                El nostre equip de professionals altament capacitats inclou veterinaris amb àmplia experiència en diverses àrees de la medicina veterinària, així com personal de suport amable i dedicat.</p>
                        <img class="team" src="./img/VeterinaryTEam.jpeg" alt="team1">
                        <p>Comptem amb un equip multidisciplinari de veterinaris, cadascun especialitzat en diferents camps com a medicina interna, cirurgia, ortopèdia, dermatologia i odontologia. 
                                Els nostres veterinaris estan compromesos amb l'educació contínua i l'actualització constant de les seves habilitats per a garantir que les nostres mascotes rebin la millor cura possible. 
                                A més, el nostre equip de tècnics veterinaris certificats i assistents de veterinària altament capacitats estan disponibles per a brindar suport en totes les àrees de la clínica, des de l'atenció al client fins a l'assistència en procediments mèdics.</p>
                        <img class="team" src="./img/vetTeam.jpeg" alt="team2">
                        <p>En la nostra clínica, cada mascota és tractada amb el mateix amor i atenció que si fos part de la nostra pròpia família. 
                                Ens esforcem per establir relacions sòlides amb els nostres clients i les seves mascotes, basades en la confiança, la comunicació oberta i el respecte mutu. 
                                Estem ansiosos per donar la benvinguda a les mascotes de la nostra comunitat i ésser un recurs de confiança per a totes les seves necessitats veterinàries.</p>
                        <br>
                        </article>`;
const plansContent = `
                        <h2 class="h2botiga">Plans de Salut</h2>
                        <table id="tabla">
                                <tr>
                                    <th rowspan="2">Pla</th>
                                    <th colspan="6">Duració</th>
                                </tr>
                                <tr id="plan">
                                    <th>Bronze</th>
                                    <th>Plata 1</th>
                                    <th>Plata 2</th>
                                    <th>l'Or</th>
                                    
                                </tr>
                                <tr id="goss">
                                    <th>Gossos</th>
                                    <td>10€/mes</td>
                                    <td>15€/mes</td>
                                    <td>20€/mes</td>
                                    <td>50€/mes</td>
                                </tr>
                                <tr id="gat">
                                    <th>Gats</th>
                                    <td>10€/mes</td>
                                    <td>12€/mes</td>
                                    <td>15€/mes</td>
                                    <td>23€/mes</td>
                                </tr>
                                <tr id="hamst">
                                    <th>Hamsters</th>
                                    <td>2€/mes</td>
                                    <td>5€/mes</td>
                                    <td>8€/mes</td>
                                    <td>15€/mes</td>
                                </tr>
                        </table>
                        <article id="salut"> 
                            <fieldset class="plans">
                        <h2 class="capsplans"> PLA DE SALUT PER A GOSSOS</h2>
                                <b>L'Assegurança de Salut</b>
                                <br><br>
                                <b> Serveis de Salut inclosos</b>
                                <ul>
                                    <li>Consultes</li>
                                    <li>Consultes d'especialitat en clínica</li>
                                    <li>Hospitalització domiciliària amb monitoratge</li>
                                </ul>
                                <b>Serveis de Prevenció inclosos</b>
                                <ul>
                                    <li>Desparasitacións internes trimestrals realitzades en la clínica</li>
                                    <li>Revisió anual i certificat de salut anual de salut</li>
                                    <li>Revisions bucodentals trimestrals</li>
                                    <li>Vacuna tetravalent (borm, hepatitis, leptospirosis, parvovirus)</li>
                                    <li>Vacuna pentavalent (borm, hepatitis, leptospirosis, parvovirus i parainfluença)</li>
                                    <li>Vacuna parvovirus</li>
                                    <li>Vacuna parainfluença</li>
                                    <li>Test de leishmània</li>
                                    <li>Vacuna leishmània</li>
                                </ul>
                            </fieldset>
                            <fieldset class="plans">
                                <h2 class="capsplans"> PLA DE SALUT PER A GATS</h2>
                                    <b>L'Assegurança de Salut</b>
                                    <br><br>
                                    <b>Serveis de Salut inclosos</b>
                                    <ul>
                                        <li>Consultes</li>
                                        <li>Consultes d'especialitat en clínica</li>
                                        <li>Hospitalització domiciliària amb monitoratge</li>
                                    </ul>
                                    <b>Serveis de Prevenció inclosos</b>
                                    <ul>
                                        <li>Test d'immunodeficiència i leucèmia</li>
                                        <li>Vacuna trivalent (panleucopenia, calicivirus i rinotraqueïtis)</li>
                                        <li>Vacuna leucèmia</li>
                                        <li>Vacuna tretravalente (panleucopenia, calicivirus, rinotraqueïtis, i leucèmia)</li>
                                        <li>Test de pancleucopenia anual</li>
                                        <li>Vacuna parvovirus</li>
                                        <li>Test de calicivirus anual</li>
                                        <li>Test de rinotraqueïtis bianual</li>
                                        <li>Test de leucèmia semestral</li>
                                    </ul>
                                </fieldset>
                                <fieldset class="plans">
                                    <h2 class="capsplans"> PLA DE SALUT PER A HAMSTERS</h2>
                                        <b>L'Assegurança de Salut</b>
                                        <br><br>
                                        <b>Serveis de Salut inclosos</b>
                                        <ul>
                                            <li>Consultes</li>
                                            <li>Consultes d'especialitat en clínica</li>
                                        </ul>
                                        <b>Serveis de Prevenció inclosos</b>
                                        <ul>
                                            <li>Desparasitacións internes anuals</li>
                                            <li>Malaltia de cua mullada</li>
                                            <li>Oclusió dels queixos</li>
                                            <li>Vacuna Àcars i fongs</li>
                                            <li>Control de Diarrea</li>
                                            <li>Abscessos</li>
                                            <li>Test de Tumors</li>
                                        </ul>
                                    </fieldset>
                        </article>
                        
                        </main>`;
const nouClientContent = `
                            <h2 class="h2botiga">Afegeix un Nou Client i la seva Mascota</h2>
                            <br>
                            <form id="nomNOU">
                                <fieldset class="ingres">
                                    <legend>Dades de Client</legend>
                                    <label for="nomCLI">Nom: </label>
                                    <input type="text" name="nomCLI" id="nomCLI" pattern="[a-zA-ZÑñÇç]{3,20}" placeholder="Nom de client" required>
                                    <label for="cognomsNOU">Cognoms: </label>
                                    <input type="text" name="cognomsNOU" id="cognomsNOU" pattern="[a-zA-ZÑñÇç]{3,20}" placeholder="Cognoms del client" required>
                                    <br>
                                    <label for="dniNOU">DNI: </label>
                                    <input type="text" name="dniNOU" id="dniNOU" pattern="[a-zA-Z0-9]{7,}" placeholder="12345678B" required>
                                    <label for="mailNOU">eMail: </label>
                                    <input type="email" name="mailNOU" id="mailNOU" placeholder="correo@mail.com" required>
                                    <br>
                                    <label for="telefonNOU">Telefon: </label>
                                    <input type="text" name="telefonNOU" id="telefonNOU" pattern="[0-9]{8,15}" placeholder="Ej. 93173839261" required>
                                </fieldset>
                                <fieldset class="ingres">
                                    <legend>Dades de la Seva Mascota</legend>
                                    <label for="mascNOU">Nom de mascota: </label>
                                    <input type="text" name="mascNOU" id="mascNOU" pattern="[a-zA-ZÑñÇç]{3,20}" placeholder="Nom de mascota" required>
                                    <label for="especieNOU">Especie: </label>
                                    <select name="especieNOU" id="especieNOU" required>
                                        <option disabled selected value="">Seleccioni Especie</option>
                                        <option value="Goss">Goss</option>
                                        <option value="Gat">Gat</option>
                                        <option value="Hamster">Hamster</option>
                                    </select>
                                    <br>
                                    <label for="edatNOU">Edat(anys): </label>
                                    <input type="text" name="edatNOU" id="edatNOU" pattern="[0-9]{1,2}" placeholder="L'edat" required>
                                    <div>
                                        <label for="generoNOU">Genero:</label>
                                        <input type="radio" name="generoNOU" id="generoNOU" value="Masculi" required>
                                        <label for="generoNOU">Masculi</label>
                                        <input type="radio" name="generoNOU" id="genero2NOU" value="Femeni" required>
                                        <label for="genero2NOU" class="checkNOU">Femeni</label>
                                        <br>
                                    </div>
                                    <label for="amoNOU" style="padding: 5px 0;">El mateix amo: </label>
                                    <input type="checkbox" name="amoNOU" id="amoNOU">
                                    <br>
                                    <label for="simptomes" style="padding: 10px 0;">Simptomes:</label>
                                    <textarea name="simptomes" id="simptomes" maxlength="500" placeholder="Primera valoració dels símptomes. Max 500 caracters..."></textarea>
                                </fieldset>
                                <fieldset class="ingres">
                                    <legend>Enviar formulari</legend>
                                    <input type="submit" value="Enviar" name="submitNOU" id="submitNOU" onclick = "anyadir()">
                                    <input type="reset" value="Borrar" name="resetNOU" id="resetNOU" onclick="alert('Formulario Borrado.')">
                                </fieldset>
                        </form>`;
const botigaContent = `
                            <h2 class="h2botiga">Botiga</h2>
                            <div class="column1">
                                <article class="img1">
                                    <a href="#"><img src="./img/botiga/acana-bountiful-cath-cat.jpg" alt="img1" ></a>
                                    <h3>Acana Bountiful Catch Cat</h3>
                                    <p><b>Alimento natural Acana Bountiful Catch para gatos</b>
                                        Acana Bountiful Catch Cat es una receta para gatos adultos repleta de ingredientes animales de alta calidad.
                                        
                                        Elaborado con pescado altamente nutritivo que aporta todos los nutrientes necesarios para su felino. </p>
                                </article>
                                <article class="img2">
                                    <a href="#"><img src="./img/botiga/advance-renal-failure-feline.jpg" alt="img2"></a>
                                    <h3>Advance Renal Failure Feline</h3>
                                    <p> ndicaciones: Insuficiencia renal. Urolitiasis por oxalato cálcico. Principios de insuficiencia cardíaca congestiva. Hipertensión.
                                        Enfermedad hepática asociada con encefalopatía. </p>
                                </article>
                                <article class="img2">
                                    <a href="#"><img src="./img/botiga/alfombrilla-refrescante-90-x-50.jpg" alt="img3"></a>
                                    <h3>Alfombrilla refrescante 90x50cm</h3>
                                    <p><b> Alfombrilla con efecto refrescante</b> a través del contacto del cuerpo del animal.

                                        Funciona sin refrigeración adicional, electricidad o agua.</p>
                                </article>
                                <article class="img2">
                                    <a href="#"><img src="./img/botiga/ardilla-peluche-24-168x168.jpg" alt="img4"></a>
                                    <h3>Ardilla peluche 24cm</h3>
                                    <p><b>Peluche muy original con forma de ardilla</b> con el que su mascota jugará sin descanso.

                                        Los peluches de la marca Trixie son de excelente calidad para que puedan durarle mucho tiempo al animal. </p>
                                </article>
                                </div>
                                <br>
                                <div class="column2">
                                    <article class="img2">
                                        <a href="#"><img src="./img/botiga/bocados-pollo.jpg" alt="img5"></a>
                                        <h3>Bocados Pollo</h3>
                                        <p> Sanas y divertidas barritas para perros.

                                            Snacks que premian su fidelidad, entretienen, limpian los dientes, refuerzan la mandíbula, aportan proteínas, vitaminas y minerales. </p>
                                    </article>
                                    <article class="img2">
                                        <a href="#"><img src="./img/botiga/cat-naturals-premium-catnip.jpg" alt="img6"></a>
                                        <h3>Cat naturals premium catnip</h3>
                                        <p> <b>KONG naturals catnip</b> és una herba nord-americana de gran qualitat que atreu moltíssim als gats.

                                            S'utilitza per a emplenar o polvoritzar (si és esprai) les joguines per a gats i així crear major atracció. 
                                            L'oli d'aquesta herba desperta l'instint natural de l'animal. </p>
                                    </article>
                                    <article class="img3">
                                    <a href="#"><img src="./img/botiga/alpha-spirit-cat-pouch-mousse-jamon.jpg" alt="img7"></a>
                                    <h3>Alpha Spirit cat pouch mousse jamón</h3>
                                    <p> <b>Alimentación húmeda 100% natural para gatos de todos los tamaños y edades.</b>

                                        Rica y sabrosa textura mousse para alimentar a su felino de la forma más sana posible.
                                        
                                        Ingredientes aptos para consumo humano.
                                        
                                        Contiene carne de cerdo como única fuente de proteína animal. </p>
                                    </article>
                                    <article class="img4">
                                    <a href="#"><img src="./img/botiga/complete-hamster-gerbil.jpg" alt="img8"></a>
                                    <h3>Complete hamster & gerbil</h3>
                                    <p> <b>Complete hamster & gerbil </b>es un pienso monocomponente 100% extruido para hámsteres y jerbos.

                                        Contiene proteínas animales adicionales para facilitar la digestión y absorción.
                                        
                                        </p>
                                    </article>
                                </div>
                                <br>
                                <div class="column3">
                                    <article class="img2">
                                        <a href="#"><img src="./img/botiga/cueva-suave-hamster.jpg" alt="img9"></a>
                                        <h3>Cueva Suave Hámster Trixie</h3>
                                        <p> <b>Cueva para hámster</b> con enganches para colgar en la jaula.
                                            Indicada para pequeños roedores como hámster y mamíferos. 
                                            Perfecta para resguardarse del frío y mantenerse protegido ante cualquier situación. </p>
                                    </article>
                                    <article class="img2">
                                        <a href="#"><img src="./img/botiga/cueva-suave-kaline-gris.jpg" alt="img10"></a>
                                        <h3>Cueva suave kaline gris</h3>
                                        <p> <b>Cueva suave para perros de raza pequeña.</b>
                                            Tejido de peluche suave muy cómodo para el animal.
                                            Relleno de gomaespuma. </p>
                                    </article>
                                    <article class="img3">
                                    <a href="#"><img src="./img/botiga/natura-diet-iberico-rice.jpg" alt="img11"></a>
                                    <h3>Natura Diet Ibérico & Rice</h3>
                                    <p> <b>Alimento natural Natura Diet Ibérico & Rice</b> para perros adultos
                                        Natura Diet Ibérico & Rice es un alimento completo, natural, nutritivo y saludable, elaborado con ingredientes con baja o nula capacidad alergénica, 
                                        biológicamente adaptado para el disfrute de los perros adultos de todos los tamaños. </p>
                                    </article>
                                    <article class="img4">
                                    <a href="#"><img src="./img/botiga/premio-rolls-pollomerluza.jpg" alt="img12"></a>
                                    <h3>Premio Rolls Pollo/Merluza Trixie</h3>
                                    <p> <b>Rico snack para gatos con pollo y merluza.</b>

                                        Con un 65% de carne y un 18% de pescado.
                                        
                                        Sin azúcar añadido.
                                        
                                        Bolsa con autocierre. </p>
                                    </article>
                        </div>`;
const logInContent = `
                        <h2 class="h2botiga">Ingrés</h2>
                        <br>
                        <form id="login">
                            <fieldset id="ingresLOG">
                                <label for="nombreLOG">Usuari: </label>
                                    <input type="text" 
                                        name="nombreLOG" 
                                        id="nombreLOG"
                                        pattern="[a-zA-ZÑñÇç]{3,20}"
                                        placeholder="Nom del usuari"
                                        required
                                        >
                                        <br>
                                <label for="passwordLOG">Contrasenya: </label>
                                    <input type="password" 
                                        name="passwordLOG" 
                                        id="passwordLOG"
                                        placeholder="Introdueix la teva contrasenya"
                                        required
                                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                        title="El campo tiene que tener una mayuscula, una minuscula y un simbolo especial."
                                        >
                                        <input type="submit" 
                                            value="Entrar"
                                            name="submitLOG" 
                                            id="submitLOG">
                            </fieldset>
                            <span id="AccesClinica">
                                <h4>Accés a la Clínica</h4>
                                <p>Per a accedir a la nostra clínica veterinària, et proporcionem la següent informació:</p>
                                <h4>Direcció</h4>
                                <p>La nostra clínica està situada en la següent adreça: <b>C/Farigola, 33. Barcelona</b></p>
                                <h4>Horaris d'Atenció</h4>
                                        <ul id="horari">
                                            <li><b>Dilluns a Divendres: </b> <br><br>9.00  - 18.00  </li>
                                            <br>
                                            <li><b>Dissabtes: </b> <br><br>9.00  - 13.00  </li>
                                            <br>
                                            <li><b>Diumenges: </b><br> <br> Romandre tancat </li>
                                        </ul>
                                <h4>Emergències</h4>
                                <p>En cas d'emergències fora del nostre horari d'atenció regular, oferim serveis d'emergència les 24 hores del dia, els 7 dies de la setmana. </p>
                                <br>
                                <p>Pots comunicar-te amb el nostre equip de veterinaris d'emergència al següent número:</p>
                                <br><br>
                                <h2>Telèfon d'Emergències: <b>+34 634239432</b></h2>
                                <br><br>
                                <p>Si us plau, tingues en compte que els serveis d'emergència estan destinats a situacions urgents i que poden aplicar-se càrrecs addicionals.</p>
                                <p>Si tens alguna pregunta o necessites més informació, no dubtis a contactar-nos. </p>
                                <br><br>
                                <p><b>Som aquí per a ajudar-te i brindar-te la millor cura per a la teva mascota.</b></p>
                                
                            </span>
                        </form>`;
const contactContent = `
                        <h2 class="h2botiga">Pagina de contacte</h2>
                        <br>
                            <form id="formCON" action="">
                                <fieldset class="ingresCON">
                                    <legend>Dades de Client</legend>
                                    <label class="dades" for="nomCON">Nom: </label>
                                        <input type="text" 
                                            name="nomCON" 
                                            id="nomCON"
                                            pattern="[a-zA-ZÑñÇç]{3,20}"
                                            placeholder="Nom i Cognoms"
                                            required
                                            >
                                    
                                    <label class="dades" for="mailCON">eMail: </label>
                                        <input type="email" 
                                            name="mailCON" 
                                            id="mailCON"
                                            placeholder="correo@mail.com"
                                            required
                                            >
                                    <label for="preguntesCON">Preguntes: </label>
                                        <br>
                                        <textarea name="preguntesCON" 
                                            id="preguntesCON" 
                                            maxlength="500" 
                                            placeholder="Introdueix els teus dubtes o preguntes i respondrem al més aviat que ens sigui possible. Max.500 caràcters..."></textarea>
                                            <br>

                                    <div id="politiquesCON">
                                            <b>Acceptar <span id="spanPol" onclick="modal()"> polítiques: </span></b>
                                            <input type="checkbox"
                                            name="amoCON" 
                                            id="amoCON"
                                            required
                                            title="Es obligatori acceptar les politiques de privacitat"
                                                >
                                                <div id="modal" class=""modal>
                                                    <div class="modal-contenido">
                                                    </div>
                                                        

                                                    <article id="politiquesPRIV">
                                                    <h2 class="h2polpriv">Política de privacitat web 2022 <br> Protecció de dades de caràcter personal segons la LOPDDD</h2>
                                                    <p id="parpolpriv">
                                                        En aplicació de la normativa vigent en matèria de protecció de dades de caràcter personal, 
                                                        informa que les dades personals que es recullen a través dels formularis d'aquesta web, 
                                                        s'inclouen en els fitxers automatitzats específics d'usuaris dels serveis de La recollida i tractament automatitzat de les dades de caràcter personal
                                                        té com a finalitat el manteniment de la relació comercial i l'acompliment de tasques d'informació, formació, assessorament i altres activitats pròpies de PetSalut</a>. <br>
                                                        Aquestes dades únicament seran cedits a aquelles entitats que siguin necessàries amb l'únic objectiu de donar compliment a la finalitat anteriorment exposada.
                                                    </p>
                                                    </article>
                                                    </div>
                                                    
                                                            <input type="submit" 
                                                            value="Submit"
                                                            name="submitCON" 
                                                            id="submitCON">
                                            
                                        </div>
                                </fieldset>

                        <h2 class="h2botiga">Subscriu-te al nostre butlletí</h2>
                        <br>
                                <fieldset id="BULLETI">
                                    <label for="mailBUL"></label>
                                        <input type="email" 
                                            name="mailBUL" 
                                            id="mailBUL"
                                            placeholder="El teu mail"
                                            >
                                        <input type="submit" 
                                            value="Subscriure'm"
                                            name="submitBUL" 
                                            id="submitBUL"
                                            >
                                </fieldset>
                        </form>`;
const listaContent = `
    <h2 class="h2botiga">Lista de Clientes Registrados</h2>
    <div id="clientList"></div>
    <br>
    <button onclick="borrarListaClientes()" id="borrarDatosBtn">Borrar lista de clientes
                        </button>`;

function modal() {
  let modal = document.getElementById("modal");
  let close = document.querySelectorAll("close");
  modal.style.display = "block";
  close.onclick = () => {
    modal.style.display = "none";
  };
}
function anyadir() {
  let client = {
    nomCLI: document.getElementById("nomCLI").value,
    cognomsNOU: document.getElementById("cognomsNOU").value,
    dniNOU: document.getElementById("dniNOU").value,
    mailNOU: document.getElementById("mailNOU").value,
    telefonNOU: document.getElementById("telefonNOU").value,
    mascNOU: document.getElementById("mascNOU").value,
    especieNOU: document.getElementById("especieNOU").value,
    edatNOU: document.getElementById("edatNOU").value,
    xipNOU: Math.random().toString().substring(14),
    generoNOU: document.querySelector('input[name="generoNOU"]:checked').value,
    amoNOU: document.getElementById("amoNOU").checked,
    simptomes: document.getElementById("simptomes").value,
  };

  let clients = JSON.parse(localStorage.getItem("clients")) || [];
  clients.push(client);
  localStorage.setItem("clients", JSON.stringify(clients));

  alert("Cliente registrado con éxito!");
  document.getElementById("nomNOU").reset();
}

function listarCli() {
  let clients = JSON.parse(localStorage.getItem("clients")) || [];
  let clientListDiv = document.getElementById("clientList");

  if (clients.length === 0) {
    clientListDiv.innerHTML = `<p>No hay clientes registrados.</p>`;
  } else {
    let clientTable = '<table id="listaClientes">';
    clientTable +=
      "<tr><th>Nombre</th><th>Cognoms</th><th>DNI</th><th>Email</th><th>Teléfono</th><th>Nombre de Mascota</th><th>Especie</th><th>Edad</th><th>Número del Chip</th><th>Género</th><th>Mismo Amo</th><th>Síntomas</th></tr>";

    clients.forEach((client) => {
      clientTable += `<tr>
                                <td>${client.nomCLI}</td>
                                <td>${client.cognomsNOU}</td>
                                <td>${client.dniNOU}</td>
                                <td>${client.mailNOU}</td>
                                <td>${client.telefonNOU}</td>
                                <td>${client.mascNOU}</td>
                                <td>${client.especieNOU}</td>
                                <td>${client.edatNOU}</td>
                                <td>${client.xipNOU}</td>
                                <td>${client.generoNOU}</td>
                                <td>${client.amoNOU ? "Sí" : "No"}</td>
                                <td>${client.simptomes}</td>
                                </tr>`;
    });

    clientTable += "</table>";
    clientListDiv.innerHTML = clientTable;
  }
}

function borrarListaClientes() {
  localStorage.removeItem("clients");
  location.reload();
}
