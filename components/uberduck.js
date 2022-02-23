
/**
 * 
 * @param {string} Text texto que vai ser falado.
 * @param {string} Voice voz que vao ser falada
 * @return {string |null} Link da voz
 */


export default async function voiceGenerator(data, voice) {

    const API_KEY = "pub_ihecajwhzdskhgbdfl";
    const API_SECRET = "pk_4ae996d6-3965-4b41-be5e-2106131af061"

    const response = await fetch(
        "https://api.uberduck.ai",
        {
            headers: { Authorization: 'Basic ' + 'pub_ihecajwhzdskhgbdfl:pk_4ae996d6-3965-4b41-be5e-2106131af061',         'Content-Type': 'application/json', Accept: 'application/json'},
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;

}


