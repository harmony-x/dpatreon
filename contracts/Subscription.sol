// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PatreonThreeSubscription is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Tier {
        bool published;
        string title;
        uint256 price;
        string image;
        string benefits;
        string description;
    }

    struct Creator {
        // Tier Fields
        mapping(uint256 => Tier) tiers;
    }

    struct SubscriptionData {
        uint256 startDate;
        address creatorAddress;
        uint256 tierId;
    }

    mapping(address => Creator) private creators;
    mapping(uint256 => SubscriptionData) private subscriptions;



    constructor() ERC721("PatreonThreeSubscription", "PTS") {}

    function startSubscribe(address _creator, uint256 _tierId)
        public
        payable
        returns (uint256)
    {
        require(creators[_creator].tiers[_tierId].published && _tierId < 3, "This tier does not exist");
        require(msg.value >= creators[_creator].tiers[_tierId].price * 1e16 wei , "Send more ethers");
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        subscriptions[newItemId].startDate = block.timestamp;
        subscriptions[newItemId].creatorAddress = _creator;
        subscriptions[newItemId].tierId = _tierId;

        _tokenIds.increment();
        payable(_creator).transfer(msg.value);
        return newItemId;
    }

    function getTier(address _creator, uint256 _tierId) 
        public
        view 
        returns (Tier memory tier)
    {
        require(_tierId < 3, "This tier does not exist");
        return creators[_creator].tiers[_tierId];
    }

    function setTier(uint256 _tierId, Tier memory _tierInfo) 
        public  
        returns (bool success)
    {
        require(_tierId < 3, "This tier does not exist");
        creators[msg.sender].tiers[_tierId].published = _tierInfo.published;
        creators[msg.sender].tiers[_tierId].title = _tierInfo.title;
        creators[msg.sender].tiers[_tierId].price = _tierInfo.price;
        creators[msg.sender].tiers[_tierId].image = _tierInfo.image;
        creators[msg.sender].tiers[_tierId].benefits = _tierInfo.benefits;
        creators[msg.sender].tiers[_tierId].description = _tierInfo.benefits;
        return true;
    }

    function setTierStatus(uint256 _tierId, bool _published)
        public
        returns (bool success)
    {
        require(_tierId < 3, "This tier does not exist");
        creators[msg.sender].tiers[_tierId].published = _published;
        return true;
    }

    function getTokenCount() public view returns (uint256 count) {
        return _tokenIds.current();
    }

    function getSubscriptionData(uint256 _nftId) public view returns (SubscriptionData memory subscriptionData) {
        require(_nftId < _tokenIds.current(), "NFT does not exist");
        return subscriptions[_nftId];
    }


    function getPatrons(address _creatorAddress) public view returns (uint256 patronCount) {
        uint256 patrons = 0;
        for(uint256 i=0; i<_tokenIds.current(); i++) {
            if(subscriptions[i].creatorAddress == _creatorAddress){
                patrons += 1;
            }
        }
        return patrons;
    }
}