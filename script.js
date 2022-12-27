
// NavBar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

 

// connect to crypto address

window.userAddress = null;


window.onload = async () => {
    // Init Web3 connected to ETH network
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
    } else {
        alert("No ETH brower extension detected.");
    }

    // Load in Localstore key
    window.userAddress = window.localStorage.getItem("userAddress");
    
    showAddress();
};

// Use this function to turn a 42 character ETH address
// into an address like 0x345...12345
function truncateAddress(address) {
    if (!address) {
        return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
        address.length - 5,
        address.length
    )}`;
}

// Display or remove the users know address on the frontend
function showAddress() {
    if (!window.userAddress) {
        document.getElementById("userAddress").innerText = "Login";
        document.getElementById("logoutButton").classList.add("hidden");
        return false;
    }

    document.getElementById(
        "userAddress"
    ).innerText = `${truncateAddress(window.userAddress)}`;
    document.getElementById("logoutButton").classList.remove("hidden");
    
    console.log(window.localStorage.getItem("userAddress"))
}

// remove stored user address and reset frontend
function logout() {
    window.userAddress = null;
    window.localStorage.removeItem("userAddress");
    showAddress();
}

// Login with Web3 via Metamasks window.ethereum library
async function loginWithEth() {
    if (window.web3) {
        try {
            // We use this since ethereum.enable() is deprecated. This method is not
            // available in Web3JS - so we call it directly from metamasks' library
            const selectedAccount = await window.ethereum
                .request({
                    method: "eth_requestAccounts",
                })
                .then((accounts) => accounts[0])
                .catch(() => {
                    throw Error("No account selected!");
                });
            window.userAddress = selectedAccount;
            window.localStorage.setItem("userAddress", selectedAccount);
            showAddress();
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("No ETH brower extension detected.");
    }
}

// Add User Address to New Form

function insertAdd() {
  console.log(window.localStorage.userAddress)
  document.getElementById('loggedInAddy').value = window.localStorage.userAddress;
}

// give wallet address to php $session variable ?

function user_addy() {
  console.log(window.localStorage.userAddress)
  return window.localStorage.userAddress;
}


// Edit and Delete Forms

$(document).ready(function() {

    $('.deletebtn').on('click', function() {

        $('#deletemodal').modal('show');

        $tr = $(this).closest('tr');

        var data = $tr.children("td").map(function() {
            return $(this).text();
        }).get();

        console.log(data);

        $('#delete_id').val(data[1]);
        $('#delete_name').val(data[3]);

    });
});

$(document).ready(function() {

    $('.editbtn').on('click', function() {

        $('#editmodal').modal('show');

        $tr = $(this).closest('tr');

        var data = $tr.children("td").map(function() {
            return $(this).text();
        }).get();

        console.log(data);

        document.getElementById('edit_user_address').value = data[0];

        $('#edit_user_address').val(data[0]);
        $('#edit_proj_id').val(data[1]);
        $('#edit_mint_date').val(data[2]);
        $('#edit_project_name').val(data[3]);
        $('#edit_mintlist').val(data[4]);
        $('#edit_price').val(data[5]);
        $('#edit_website').val(data[6]);
        $('#edit_twitter').val(data[7]);
        $('#edit_note').val(data[8]);
    });
});
