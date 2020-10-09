class Stack
attr_accessor :stacks

    def initialize
        @holding = Array.new(n)
    end

    def push(el)
        @holding << el
    end

    def pop
        @holding.pop
    end

    def peek
return @holding[0]
    end
 
end #!end of code 