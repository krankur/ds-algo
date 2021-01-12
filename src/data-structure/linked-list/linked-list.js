var LinkedList = (function() {
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    function LinkedList() {
        this.head = null;
        this.tail = null;
    }

    LinkedList.prototype.append = function(data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Make "next" of the current node object, referenced by tail, point to the new node object.
            this.tail.next = newNode;
            // Update tail to reference the new node object.
            this.tail = newNode;
        }
        return this;
    };

    LinkedList.prototype.prepend = function(data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.tail = newNode;
        }
        // Make "next" of the new node object point to the object referenced by head.
        newNode.next = this.head;
        // Update head to reference the new node object.
        this.head = newNode;
        return this;
    };

    LinkedList.prototype.find = function(data) {
        var currNode = this.head;
        while (currNode && currNode.data !== data) {
            currNode = currNode.next;
        }
        return currNode;    
    };

    LinkedList.prototype.insert = function(data, index) {
        var newNode = new Node(data);
        var nodeCount = 1;
        var currNode = this.head;
        // If insert position index is 0, then simply prepend the new node.
        if (index === 0) {
            this.prepend(data);
        } else {
            while (currNode && nodeCount !== index) {
                currNode = currNode.next;
                nodeCount++;
            }
            if (currNode) {
                newNode.next = currNode.next;
                currNode.next = newNode;
            } else {
                // If there is no node at the insert position,
                // it implies that the index is greater than the list length.
                // In such a case, simply append the new node.
                this.append(data);
            }
        }
        return this;
    };

    LinkedList.prototype.deleteByIndex = function(index) {
        var currNode = this.head;
        var deletedNode = null;
        var nodeCount = 1;

        if (this.head && index === 0) {
            deletedNode = this.head;
            this.head = this.head.next;
        } else {
            while (currNode.next && index === nodeCount) {
                currNode = currNode.next;
            }
            if (currNode.next) {
                // If deleted node is the last node, update tail to reference the second last node.
                if (!currNode.next.next) {
                    this.tail = currNode;
                }
                deletedNode = currNode.next;
                currNode.next = currNode.next.next;
            }
        }
        return deletedNode;
    }

    LinkedList.prototype.deleteByValue = function(data) {
        var currNode = this.head;
        var deletedNode = null;
        if (this.head && this.head.data === data) {
            deletedNode = this.head;
            this.head = this.head.next;
        } else {
            while (currNode.next && currNode.next.data !== data) {
                currNode = currNode.next;
            }
            if (currNode.next) {
                // If deleted node is the last node, update tail to reference the second last node.
                if (!currNode.next.next) {
                    this.tail = currNode;
                }
                deletedNode = currNode.next;
                currNode.next = currNode.next.next;
            }
        }
        return deletedNode;
    };

    LinkedList.prototype.appendArray = function(arr) {
        var self = this;
        arr.forEach(function(el) {
            self.append(el);
        });
    };

    LinkedList.prototype.display = function() {
        var currNode = this.head;
        var linkedListString = '';
        while (currNode) {
            linkedListString += currNode.data + ' ';
            currNode = currNode.next;
        }
        console.log(linkedListString);
    };

    return LinkedList;
})();