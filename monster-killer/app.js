const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 25;

const MODE_ATTACK = "ATTACK"; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_STRONG_ATTACK = 1

function getMaxLifeValues() {
    const enteredValue = prompt("Maximum life for you and the monster.", "100");
    let parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) { // check two conditions
        throw { message: "Invalid user input, not a number." };
    }
    return parsedValue; // return a number
}

let chosenMaxLife;

try {
    chosenMaxLife = getMaxLifeValues();
} catch (error) { // error handling
    console.log(error);
    chosenMaxLife = 100; // set default case for max life = 100
    alert(
        "You entered an invalid input. So a default value of 100 is used instead."
    );
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("You would be dead, but the bonus life saved you.");
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("Draw match");
    }
    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset(); // reset game since there's a result
    }
}

function attackMonster(attackMode) {
    // Format let variable = condition ? value_for_true_condition : value_for_false_condition
    let maxDamage =
        attackMode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    // Translation to normal if-else block
    if (attackMode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
    } else {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage; // currentMonsterHealth = currentMonsterHealth - damage;
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
