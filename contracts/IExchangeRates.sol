pragma solidity 0.4.25;

/**
 * @title ExchangeRates interface
 */
interface IExchangeRates {
    function rateForCurrency(bytes4 currencyKey) external view returns (uint);

    function anyRateIsStale(bytes4[] currencyKeys) external view returns (bool);

    function rateIsStale(bytes4 currencyKey) external view returns (bool);
}