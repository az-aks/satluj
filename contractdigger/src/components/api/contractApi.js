import axios from 'axios'


/**
 * fetch txn details from the scan.
 * 
 */
const BASE_URL_BALANCE = 'https://api.polygonscan.com/api?module=account&action=balance'
const BASE_URL_TXLIST = 'https://api.polygonscan.com/api?module=account&action=txlist'

//  &address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=DDZ3YDH9HWYIPBPJDVU6HCBQJWVSU4DG28'
const API_KEY='DDZ3YDH9HWYIPBPJDVU6HCBQJWVSU4DG28'

// https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=%CONTRACT%&startblock=0&endblock=99999999&sort=asc&apikey=%APIKEY%
export const getContractTransactionsPolygon = async (contractAddress) => {
    try {
        const url = `${BASE_URL_TXLIST}&address=${contractAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
        const response = await axios.get(url);
        const  txnlist = response.data;
        console.log(`Got txns from list for url: txnlist`, url, txnlist);
        return txnlist.result;
      } catch (errors) {
        console.error(errors);
      }
    }



  
