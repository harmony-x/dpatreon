// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

/** 
 * @title Patreon
 * @dev Implements a decentralized version of patreon
 */
contract Patreon {

    using Counters for Counters.Counter;
    Counters.Counter private _creatorIds;

    struct Tier {
        bool published;
        string title;
        uint256 price;
        string image;
        string benefits;
        string description;
    }
    struct Creator {
        bool launched;
        address creatorAddress;

        //  Basics Fields
        string profilePhoto;
        string coverPhoto;
        string name;
        string isAreCreating;
        string about;
        
        // Tier Fields
        Tier[] tiers;
    }
    
    mapping(uint256 => address) private creatorIds;
    mapping(address => Creator) private creators;
    mapping(address => bool) private started;

    function getCreatorCount() public view returns (uint count) {
       return _creatorIds.current();
    }

    function launch() public returns (bool success){
        require(creators[msg.sender].launched == false, "Page is launched");
        creators[msg.sender].creatorAddress = msg.sender;
        creators[msg.sender].launched  = true;
        if(!started[msg.sender]){
            creatorIds[_creatorIds.current()] = msg.sender;
            started[msg.sender] = true;
            _creatorIds.increment();
        }

        return true;
    }

    function takeDown() public returns (bool success){
        require(creators[msg.sender].launched  == true, "Page is not launched");
        creators[msg.sender].launched  = false;
        return true;
    }

    function fillBasics(string memory _profilePhoto, string memory _coverPhoto, string memory _name, string memory _isAreCreating, string memory _about) public returns (bool success){
        creators[msg.sender].profilePhoto = _profilePhoto;
        creators[msg.sender].coverPhoto = _coverPhoto;
        creators[msg.sender].name = _name;
        creators[msg.sender].isAreCreating = _isAreCreating;
        creators[msg.sender].about = _about;
        return true;
    }

    function getCreator(address _creatorId) public view returns (Creator memory _creator) {
       return creators[_creatorId];
    }

    function getCreator(uint256 _creatorId) public view returns (Creator memory _creator) {
       return creators[creatorIds[_creatorId]];
    }
}