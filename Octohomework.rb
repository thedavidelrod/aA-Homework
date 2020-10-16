def sluggish_octopus(array)
result = []

   (0...array.length).each do |i|
        (1...array.length - 1).each do |j|
            if array[i].length > array[j].length && !result.include?(array[i])
                result << array[i]
            end
        end
   end
result.max_by(&:length)
end

# p sluggish_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])
# => "fiiiissshhhhhh"
class Array

    def mergesort(&prc)
        prc ||= {|a,b| a<=>b}

        return self if self.length <= 1 

        middle = self.length / 2
        sorted_left = self.take(middle).mergesort(&prc)
        sorted_right = self.drop(middle).mergesort(&prc)

        Array.merge(sorted_left, sorted_right, &prc)
    end

    def self.merge(left, right, &prc)
        result = Array.new
        until left.empty? || right.empty?
            case prc.call(left.first, right.first)
            when -1
                result << left.shift
            when 0
                result << left.shift
            when 1
                result << right.shift
            end
        end
        result.concat(left)
        result.concat(right)
        result
    end

        
    end
end#!

def clever_octopus(array)
    biggy = array.first

    array.each do |fish|
        if fish.length > biggy.length
            biggy = fish
        end
    end
    biggy
end

def slow_dance(direction, tiles)
    tiles.each_with_index do |tile, idx|
        return idx if tile == direction
    end
end

def dirty_dance(direction, tiles)
    tiles[direction]
end