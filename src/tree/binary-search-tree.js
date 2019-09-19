var BinarySearchTree = (function() {
    function Node(data) {
        this.parent = null;
        this.data = data;
        this.left = null;
        this.right = null;
    }

    function BinarySearchTree() {
        this.root = new Node(null);
    }

    var traverseAndInsert = function(data, currNode) {
        if (!currNode.data) {
            currNode.data = data;
            return currNode;
        }
        if (data < currNode.data) {
            if (currNode.left) {
                return traverseAndInsert(data, currNode.left);
            } 
            var newNode = new Node(data);
            newNode.parent = currNode;
            currNode.left = newNode;
            return newNode;
        }
        if (data > currNode.data) {
            if (currNode.right) {
                return traverseAndInsert(data, currNode.right);
            }
            var newNode = new Node(data);
            newNode.parent = currNode;
            currNode.right = newNode;
            return newNode;
        }
    };

    var traverseAndFind = function(data, currNode) {
        if (!currNode) {
            return null;
        }
        if (currNode.data === data) {
            return currNode;
        }
        if (data < currNode.data) {
            return traverseAndFind(data, currNode.left);
        }
        if (data > currNode.data) {
            return traverseAndFind(data, currNode.right);
        }
    };

    var findMin = function(root) {
        var currNode = root;
        while (currNode.left) {
            currNode = currNode.left;
        }
        return currNode;
    };

    var findMax = function(root) {
        var currNode = root;
        while (currNode.right) {
            currNode = currNode.right;
        }
        return currNode;
    };
    
    BinarySearchTree.prototype.insert = function(data) {
        return traverseAndInsert(data, this.root);
    };
    
    BinarySearchTree.prototype.insertArray = function(arr) {
        var self = this;
        arr.forEach(function(el) {
            self.insert(el);
        });
    };

    BinarySearchTree.prototype.find = function(data) {
        return traverseAndFind(data, this.root);
    };

    BinarySearchTree.prototype.delete = function(data) {
        var toDelete = traverseAndFind(data, this.root);
        if (!toDelete) {
            return false;
        }
        if (!toDelete.left && !toDelete.right) {
            var parent = toDelete.parent;
            if (parent) {
                if (parent.left.data === toDelete.data) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
            delete toDelete;
        } else if (toDelete.right) {
            // Get the node with the minimum value in the right sub-tree of the node to be deleted.
            // This is also the node with the next bigger value.
            var nextBigger = findMin(toDelete.right);

            if (nextBigger.data !== toDelete.right.data) {
                // Get node with the maximum value in the sub-tree
                // with the node having the next bigger value as the root.
                var nextBiggerTreeMax = findMax(nextBigger);

                toDelete.data = nextBigger.data;
                nextBiggerTreeMax.right = toDelete.right;
                nextBigger.right.parent = toDelete;
                toDelete.right = nextBigger.right;
                nextBigger.parent.left = null;
                delete nextBigger;
            } else {
                toDelete.parent.right = nextBigger;
                nextBigger.parent = toDelete.parent;
                toDelete.right = null;
                delete toDelete;
            }
        } else {
            toDelete.parent.left = toDelete.left;
            toDelete.left.parent = toDelete.parent;
            delete toDelete;
        }
        return true;
    };

    return BinarySearchTree;
})();