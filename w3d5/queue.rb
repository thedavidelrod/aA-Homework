class Queue
    attr_accessor :queued
    
    def initialize
        @queued = Array.new
    end
    def enqueue(ele)
        @queued.unshift(ele)
    end

    def dequeue
        @queued = @queued[0...-1]
    end

    def peek
        @queued[-1]
    end

end #! end of code